import * as React from 'react';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import {useForm, FormProvider,useFormContext,Controller} from "react-hook-form"
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button, Typography , Container, Paper,TextField,Switch, CssBaseline} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';


import GradingIcon from '@mui/icons-material/Grading';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShieldIcon from '@mui/icons-material/Shield';
import ShareIcon from '@mui/icons-material/Share';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import WbAutoIcon from '@mui/icons-material/WbAuto';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';



const steps = [
    { label: 'Compaign info', icon: <GradingIcon /> },
    { label: 'Money Pages', icon: <AttachMoneyIcon /> },
    { label: 'Safe Page', icon: <ShieldIcon /> },
    { label: 'Conditions', icon: <ShareIcon /> },
    { label: 'Compaign Filters', icon: <FilterAltIcon /> },
    { label: 'Automate', icon: <WbAutoIcon /> }
  ];



  const CampaignInfo = () => {
   const {control,formState} = useFormContext()
    const{errors} = formState;
  
    return (
      <>
      <Controller
      control = {control}
      name='campaignName'
     fullWidth
      rules={{
        required: 'Campaign name is required',
        maxLength: {
          value: 50,
          message: 'Campaign name should not exceed 50 characters',
        },
      }}
      render={({field})=>(
        <>
  <TextField
        id="campaignName"
        required
        label="CAMPAIGN NAME" 
        
        variant="outlined"
        placeholder="CAMPAIGN NAME"
        fullWidth
        {...field}
        InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <HelpOutlineIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        
      /> 
      {errors?.campaignName && (
        <span style={{ color: 'red' }}>{errors.campaignName.message}</span>
      )}
      </>
      )}
      />
 &nbsp;&nbsp;&nbsp;
<Controller
    control = {control}
    name='comment'   
    rules={{
        maxLength: {
          value: 100,
          message: 'Comment should not exceed 100 characters',
        },
      }}
     render={({field})=>(
        <>
<TextField 
      id="comment" 
      label="COMMENT"
       variant="outlined"
       {...field}
       InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
        />
         {errors.comment && (
              <span style={{ color: 'red' }}>{errors.comment.message}</span>
            )}
          </>
    )}
    />
      &nbsp;&nbsp;&nbsp;
      <Controller
    control = {control}
    name='epc' 
    rules={{
        required: 'EPC is required',
        pattern: {
          value: /^\d+(\.\d{1,2})?$/, // Allow only numeric values with up to two decimal places
          message: 'Invalid EPC format',
        },
      }}  
     render={({field})=>(
        <>
    <TextField 
      id="epc"
       label="EPC" 
      variant="outlined"
      {...field}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      
        />
         {errors.epc && (
              <span style={{ color: 'red' }}>{errors.epc.message}</span>
            )}
          </>
    )}
    />

      &nbsp;&nbsp;&nbsp;
      <Controller
    control = {control}
    name='cpc'   
    rules={{
        required: 'CPC is required',
        pattern: {
          value: /^\d+(\.\d{1,2})?$/, // Allow only numeric values with up to two decimal places
          message: 'Invalid CPC format',
        },
      }}
     render={({field})=>(
        <>
      <TextField 
      id="cpc" 
      label="CPC"
       variant="outlined"
       {...field}
       InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      />
       {errors.cpc && (
              <span style={{ color: 'red' }}>{errors.cpc.message}</span>
            )}
          </>
      )}
      />
        &nbsp;&nbsp;&nbsp;
        <br></br>
        <br></br>
        <Controller
      control = {control}
      name='trafficSource'   
      rules={{
        required: 'Traffic source is required',
      }}
       render={({field})=>(
        <>
        <TextField 
        id="traffisource" 
        label="TRAFFIC SOURCE"
         variant="outlined"
         {...field}
         InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <HelpOutlineIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
       
       {errors.trafficSource && (
              <span style={{ color: 'red' }}>
                {errors.trafficSource.message}
              </span>
            )}
          </>
          
      )}
      /><hr/>
      </>
    );
    }
  




    const MoneyPages = () => {
        const {control, formState} = useFormContext();
        const { errors } = formState;
        return (
          <div>
              <Typography >Where do we send legit visitors(money pages)?</Typography><br></br>
              <Typography >
    
              <Controller
        control = {control}
        name='Description' 
        rules={{
            required: 'Description is required',
            maxLength: {
              value: 100,
              message: 'Description should not exceed 100 characters',
            },
          }}  
         render={({field})=>(
            <>
          <TextField id='des' 
          required
           label=" ENTER DESCRIPTION" 
           variant="outlined" 
           {...field}
          /> 
           {errors?.Description && (
                <span style={{ color: 'red' }}>{errors.Description.message}</span>
              )}
            </>
          
         )}/>&nbsp;&nbsp;&nbsp;
    
    
    <Controller
          control={control}
          name='Money'
          rules={{
            required: 'Money page is required',
            maxLength: {
              value: 100,
              message: 'Money page should not exceed 100 characters',
            },
          }}
          render={({ field }) => (
            <>
              <TextField
                id='money'
                required
                label='MONEY PAGE'
                variant='outlined'
                {...field}
              />
              {errors?.Money && (
                <span style={{ color: 'red' }}>{errors.Money.message}</span>
              )}
            </>
          )}
        />


                 &nbsp;&nbsp;&nbsp;
     
                 <Controller
         control = {control}
         name='Weight'   
         rules={{
            required: 'Weight is required',
            pattern: {
              value: /^\d+(\.\d{1,2})?$/,
              message: 'Invalid weight format',
            },
          }}
          render={({ field }) => (
            <>
              <TextField
                id='weight'
                required
                label='WEIGHT'
                variant='outlined'
                {...field}
              />
              {errors?.Weight && (
                <span style={{ color: 'red' }}>{errors.Weight.message}</span>
              )}
            </>
          )}
        />
        </Typography><br/><br/><hr/>
        <Typography variant='h6'>Dynamic Variables</Typography><br/>
        <Typography >Define your dynamic variables. You can pass them Money Pages using [[variable name]] placeholder.</Typography><br/>

        <Controller
        control={control}
        name='Variable'
        rules={{
          required: 'Variable is required',
          maxLength: {
            value: 50,
            message: 'Variable should not exceed 50 characters',
          },
        }}
        render={({ field }) => (
          <>
            <TextField id='var' label='Variable' variant='outlined' {...field} />
            {errors?.Variable && (
              <span style={{ color: 'red' }}>{errors.Variable.message}</span>
            )}
          </>
        )}
      />
    
    <Controller
        control={control}
        name='DefaultValue'
        rules={{
          required: 'Default Value is required',
          maxLength: {
            value: 50,
            message: 'Default Value should not exceed 50 characters',
          },
        }}
        render={({ field }) => (
          <>
            <TextField
              id='default'
              label='Default Value'
              variant='outlined'
              {...field}
            />
            {errors?.DefaultValue && (
              <span style={{ color: 'red' }}>{errors.DefaultValue.message}</span>
            )}
          </>
        )}
      />
      <hr />
    </div>
  );
};

   
     const SafePages = () => {
       const {control} = useFormContext()
   
       return (
         <div>
           <Typography>
           Where do we send human reviewers,bots,crawlers and spy tools(safe pages)?
   
           </Typography> <br/>
           <Controller
       control = {control}
       name='safePage'   
        render={({field})=>(
         <TextField id='safe'
         required
           label="SAFE PAGE"
           variant="outlined"
           {...field}  /> 
           )}/><br/><hr/>
           <Typography variant='h6'>Dynamic variables</Typography>
           <Typography>Define your dynamic variable. You can pass them to your Safe
            pages using [[variable name]] placeholder.
           </Typography>
           <Button variant='contained'>Add Variable</Button><hr/>
            </div>
          )
        }
        const Conditions = () => {
            const {control} = useFormContext()
        
            const [allowSelected, setAllowSelected] = useState(true);
            const [blockSelected, setBlockSelected] = useState(false);
          
            const handleAllowChange = () => {
              setAllowSelected(true);
              setBlockSelected(false);
            };
          
            const handleBlockChange = () => {
              setBlockSelected(true);
              setAllowSelected(false);
            };
             return (
              
               <>
               <Container component={Box} p={4}> 
               <Typography variant='h6'>Country </Typography>
                <Typography>
               
                </Typography>
               
                <FormGroup>
      <FormControlLabel 
            control={<Switch  
      checked={allowSelected}
       onChange={handleAllowChange}/>} 
       label="Allow" 
       
       />
      <FormControlLabel control={<Switch checked={blockSelected} onChange={handleBlockChange} />} label="Block" />

    </FormGroup>
        </Container><hr/>


        <Controller
        control ={control}
        name='country'
        render ={({field})=>(
          <TextField 
          variant='outlined'
           id='country'
           label='SELECT COUNTRY'
           fullWidth
           {...field} />

           )}
           />
   <hr/>
           
         </>
       )
     }
     const CompaignFilters = () => {
        const {control} = useFormContext()
    
        function not(a, b) {
          return a.filter((value) => b.indexOf(value) === -1);
        }
        
        function intersection(a, b) {
          return a.filter((value) => b.indexOf(value) !== -1);
        }
        
       
          const [checked, setChecked] = React.useState([]);
          const [left, setLeft] = React.useState([0, 1, 2, 3]);
          const [right, setRight] = React.useState([4, 5, 6, 7]);
        
          const leftChecked = intersection(checked, left);
          const rightChecked = intersection(checked, right);
        
          const handleToggle = (value) => () => {
            const currentIndex = checked.indexOf(value);
            const newChecked = [...checked];
        
            if (currentIndex === -1) {
              newChecked.push(value);
            } else {
              newChecked.splice(currentIndex, 1);
            }
        
            setChecked(newChecked);
          };
        
          const handleAllRight = () => {
            setRight(right.concat(left));
            setLeft([]);
          };
        
          const handleCheckedRight = () => {
            setRight(right.concat(leftChecked));
            setLeft(not(left, leftChecked));
            setChecked(not(checked, leftChecked));
          };
      
          const handleCheckedLeft = () => {
            setLeft(left.concat(rightChecked));
            setRight(not(right, rightChecked));
            setChecked(not(checked, rightChecked));
          };
        
          const handleAllLeft = () => {
            setLeft(left.concat(right));
            setRight([]);
          };
        
          const customList = (items) => (
            <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
              <List dense component="div" role="list">
                {items.map((value) => {
                  const labelId = 'transfer-list-item-${value}-label';
        
                  return (
                    <ListItem
                      key={value}
                      role="listitem"
                      button
                      onClick={handleToggle(value)}
                    >
                      <ListItemIcon>
                        <Checkbox
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={'List item ${value + 1}'} />
                    </ListItem>
               );
            })}
          </List>
        </Paper>
      );
    return (
      <div>
       
         <Grid container spacing={2} justifyContent="center" alignItems="center">
      
     <Typography variant='h6'>Available Filters
      <Grid item>{customList(left)}</Grid>
      </Typography>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
   sx={{ my: 0.5 }}
   variant="outlined"
   size="small"
   onClick={handleAllLeft}
   disabled={right.length === 0}
   aria-label="move all left"
 >
   ≪
 </Button>
</Grid>
</Grid>&nbsp;&nbsp;&nbsp;
<Typography variant='h6'> Enabled Filters
<Grid item>{customList(right)}</Grid>
</Typography>
</Grid> <br/><br/>
</div>
)
}

const Automate = () => {
    return (
      <div>Automate</div>
    )
  }

function getStepContent(step){
 
  switch(step){
    case 0:return(
      <>
      <CampaignInfo/>
    
      </>
    )
    case 1:return(
      <>
      <MoneyPages/>
      </>
    )
    case 2:return(
      <>
      <SafePages/>
      </>
    )
    case 3:return(
        <>
        <Conditions/>
        </>
      )
      case 4:return(
        <>
        <CompaignFilters/>
        </>
      )
      case 5:return(
        <>
        <Automate/>
        </>
      )
      case 6:return(
        <>
        </>
      )
  
      default: return "unknown step"
    }
    
  }
  export default function LinearStepper() {

    const [activeStep,setActiveStep] = useState(0);
    const methods = useForm();
    
    const handleNext=()=>{
      setActiveStep(activeStep + 1)
    }
    
    const handlePrevious=()=>{
      setActiveStep(activeStep - 1)
    }
    
    const onSubmit = (data) =>{
      console.log(data)
    };
      return (
        <div>
        <Box sx={{ width: '100%' }}>
          
          {
            activeStep === 7 ? (
              <Typography variant='h3' align='center'>
              All Changes saved
              </Typography>
            ):
            (
            <>
            
            {/* <Paper component={Box} p={3}> */}
    
            <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((step, index) => (
          <Step key={index}>
           <StepLabel
            StepIconComponent={()=> (
            <CustomStepIcon icon={step.icon} active={activeStep===index} completed={activeStep>index}/>
            )}>
              {step.label}
              </StepLabel>
          </Step>
        ))}
        
      </Stepper>
    
   
      
       
        <FormProvider {...methods}>
        <form  
        onSubmit={methods.handleSubmit(onSubmit)}
        style={{ width: '500px', margin: 'auto', height: '500px', overflowY: 'auto' }}>
        { getStepContent(activeStep)}
        <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: 2,
                    }}
                  >
        <Button 
         
         variant='contained'
         onClick={handlePrevious} 
         disabled={activeStep === 0}>
          Previous</Button>
   
          &nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant='contained' 
        onClick={handleNext}
        type='submit'>
        {activeStep === 6 ? "Save Changes" : "Next"}
        </Button>
         </Box>
       </form>
         </FormProvider>
         
      
     
       </>)
        }
         
     
   </Box>
    </div>
  );
}

const CustomStepIcon = ({ active, completed, icon }) => {
 return (
    
   <div style={{ color: active ? 'red' : completed ? 'green' : 'gray' }}>
     {React.cloneElement(icon, { style: { fontSize: 30 } })}
   </div>

  );
};
