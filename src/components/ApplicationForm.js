//Child of job container
import React from "react"
import ApplicationFormContainer from "../containers/ApplicationFormContainer"
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
  } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


  const ApplicationForm = (props) => {

    // function usePersistedState(key, defaultValue) {
    //   const [state, setState] = React.useState(
    //     () => JSON.parse(localStorage.getItem(key)) || defaultValue
    //   );
    //   useEffect(() => {
    //     localStorage.setItem(key, JSON.stringify(state));
    //   }, [key, state]);
    //   return [state, setState];
    // }
    // debugger
    // console.log("APP FORM", props)
    // componentDidMount = (props) => {
    //   debugger
    //   const selectedJobFetch = fetchJob(props.selectedJob.id) 
    //   if(getDBAnswer === true){
    //     console.log("wow")
    //   }
    //   // const selectedJobFetch = props.selectedJob.id
    // }
    
    return (
        <div> 
            Application Form
      <Form >
         <Form.Group widths='equal'>
           <Form.Field
            control={Input}
            label='Full Name'
            value={localStorage.name}
            placeholder='Full Name'
          />
        </Form.Group>
        <Form.Group widths='equal'>
           <Form.Field
            control={Input}
            value={localStorage.email}
            label='Email'
            placeholder='Email'
          />
        </Form.Group>
        <Form.Group widths='equal'>
            <Form.Field
            control={Input}
            value={localStorage.address}
            label='Address'
            placeholder='Address'
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Work Experience'
          placeholder='Tell us more about you...'
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
       <Link to="/profile"> <Form.Field onClick={props.handleSubmit} control={Button}>Submit</Form.Field></Link> 

        </Form>
        </div>
    )
}

export default ApplicationForm;