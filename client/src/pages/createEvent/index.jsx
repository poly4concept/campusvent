import React,{useState} from 'react'
import { styled } from '@mui/material/styles';
import FileBase from 'react-file-base64';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker  from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { createEvent } from '../../actions/events';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../Components/sidebar'
import './create.css'


const categories = [
  { value: 'school', label: 'School Activities'},
  { value: 'training', label: 'Training'},
  { value: 'politics', label: 'Political Event'},
  { value: 'religion', label: 'Religion and Spirituality'},
  { value: 'entertainment', label: 'Film and Entertainment'},
];

export const CreateTextField = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
        width: '90vw',
        // marginLeft: '5vw'
        },
        width: '35em',
        marginBottom: '1.5rem',
        '& label.Mui-focused': {
            color: '#3d3b3b',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
            borderColor: '#df861d',
            },
        },
}))
const CreatePage = () => {
    const [category, setCategory] = React.useState('');
    const [dateValue, setDateValue] = React.useState(new Date());
    const [timeValue, setTimeValue] = React.useState(new Date(null));
    const [createData, setCreateData] = useState({ organizer: '', contact: '', title: '', category: '', message: '', image: '', date: '', time: '', price: '' })
    const [checked, setChecked] = React.useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    
    
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };    

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        setCreateData({...createData, category: event.target.value})
    };
    const handleDateChange = (value) => {
        setDateValue(value)
        const date = value.toDateString()
        setCreateData({...createData, date})
    }
    const handleTimeChange = (value) => {
        setTimeValue(value)
        const time = value.toTimeString().split(' ')[0].split(':').splice(0,2).join(':')
        setCreateData({...createData, time})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(createData);
        dispatch(createEvent(createData, navigate))
        setCreateData({ organizer: '', contact: '', title: '', category: '', message: '', image: '', date: '', time: '', price: '' })
        navigate('/home')
    }



    return (
        <div className='create-page'>
            <Sidebar/>
            <div className="create-container">
                <h2>Create your Event</h2>
                <form noValidate onSubmit={handleSubmit}> 
                    <div className="basic-info">
                        <h4>Basic Information</h4>
                        <CreateTextField  onChange={(e) =>  setCreateData({...createData, title: e.target.value})} required  label="Event Name" />
                        <CreateTextField required value={category} onChange={handleCategoryChange} select label="Category">
                            {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </CreateTextField>
                        <CreateTextField  required onChange={(e) =>  setCreateData({...createData, message: e.target.value})} label="Events Description" multiline rows={8} />
                        
                        <div className='file-container'>
                            <FileBase  multiple={false}  onDone={({ base64 })=> setCreateData({...createData, image: base64  })} />
                            {createData.image &&  <img src={createData.image} alt='upload preview' /> }
                        </div>
                    </div>
                    <div className="contact-info">
                        <h4>Organizer's Contact</h4>
                        <p>The main point of contact for this event</p>
                        <CreateTextField onChange={(e) =>  setCreateData({...createData, organizer: e.target.value})} required  label="Organizer's Name" />
                        <CreateTextField onChange={(e) =>  setCreateData({...createData, contact: e.target.value})}  label="Contact phone(optional)" />
                    </div>
                    <div className="ticket-info">
                        <div className="ticket-header">
                            <h4>Ticket details</h4>
                            <p className='beta'>beta</p>
                        </div>
                        <FormControlLabel control={<Switch color='warning' checked={checked} onChange={handleChange}   inputProps={{ 'aria-label': 'controlled' }} />} label="Free" />
                        <Stack direction="row" spacing={3} sx={{mt: 2}}>
                            <CreateTextField onChange={(e) =>  setCreateData({...createData, price: e.target.value})} disabled={checked} sx={{width: '20vw'}} label="Price($)" />
                            <CreateTextField type="number" required sx={{width: '20vw'}} label="Available quantity" />
                        </Stack>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <h4>Schedule</h4>
                        <div className="date-container">
                            <DatePicker label="Event Date"  value={dateValue} onChange={(newValue) => handleDateChange(newValue)}
                            renderInput={(params) => <CreateTextField required sx={{ width: '10rem', mr:'2rem' }} {...params} />} />
                            
                            <TimePicker label="Event Time" value={timeValue} onChange={(newValue) =>
                            handleTimeChange(newValue)} renderInput={(params) => <CreateTextField required sx={{width: '10rem'}} {...params} />}/>
                        </div>
                    </LocalizationProvider>
                    <button type='submit' className='create-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePage;
