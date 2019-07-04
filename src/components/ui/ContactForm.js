import React, { useState, useEffect } from "react";
import { FormGroup, FormLabel, Input, TextArea } from "../styles/FormStyles";
import Button from "../styles/Button"

const ContactForm = () => {
  const [focus, setFocus] = useState(false);

  useEffect(() => setFocus(true));
  return (
    <form method="post" action="#" data-netlify="true" name="contact">
      <FormGroup>
        <Input type="hidden" name="form-name" value="contact" />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="name">
          Name:
          <span className="required">*</span>
        </FormLabel>
        <Input
          type="text"
          name="name"
          id="name"
          required
          autoFocus
          className={focus ? "focus" : ""}          
          placeholder="e.g Bob Smith"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">
          Email:
          <span className="required">*</span>
        </FormLabel>
        <Input
          type="text"
          name="email"
          id="email"
          required
          placeholder="e.g bob@gmail.com"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="message">
          Message:
          <span className="required">*</span>
        </FormLabel>
        <TextArea
          name="message"
          id="message"
          rows="4"
          required
          placeholder="e.g I would love to talk to you about...."
        />
      </FormGroup>
      <FormGroup>    
        <Button type="submit">Send Message</Button>    
        
      </FormGroup>
    </form>
  );
};
export default ContactForm;
