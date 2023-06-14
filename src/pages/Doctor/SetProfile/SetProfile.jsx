import React from 'react'
import './SetProfile.css'
const SetProfile = () => {
  return (
    <div class="setting_parent">
<div class="setting_div1"> <div class="setting_card">
    <div class="setting_card-header">
      <div class="setting_text-header">Settings</div>
    </div>
    <div class="setting_card-body">
      <form className='setting_form' action="#">
        <div class="setting_form-group">
          <label className='setting_label' for="username">Username:</label>
          <input required="" class="setting_form-control" name="username" id="username" type="text"/>
        </div>
        <div class="setting_form-group">
          <label className='setting_label' for="email">Email:</label>
          <input required="" class="setting_form-control" name="email" id="email" type="email"/>
        </div>
        <div class="setting_form-group">
          <label className='setting_label' for="password">Password:</label>
          <input required="" class="setting_form-control" name="password" id="password" type="password"/>
        </div>
        <div class="setting_form-group">
          <label className='setting_label' for="confirm-password">Confirm Password:</label>
          <input required="" class="setting_form-control" name="confirm-password" id="confirm-password" type="password"/>
        </div>
       <input type="submit" class="setting_btn" value="Update"/>  
         </form>
    </div>
  </div> </div>
</div>
   
  
  )
}

export default SetProfile