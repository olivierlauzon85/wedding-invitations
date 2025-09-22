// Google Forms integration utility
// Replace these with your actual Google Form details once you create the form

export interface GoogleFormConfig {
  actionUrl: string;
  fields: {
    name: string;
    email: string;
    attending: string;
    meal: string;
    plusOneName: string;
    plusOneMeal: string;
    dietary: string;
    message: string;
  };
}


export const GOOGLE_FORM_CONFIG: GoogleFormConfig = {  
  actionUrl: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdBgFDccZFNcbTBimF8gNxyMsTrNWfRdE1U7yYl3QXtRZF-2w/formResponse",
  
  fields: {
    name: "entry.409320971",
    email: "entry.1459150366",
    attending: "entry.631187407",
    meal: "entry.760014759",
    plusOneName: "entry.547532627",
    plusOneMeal: "entry.642230455",
    dietary: "entry.1959241901",
    message: "entry.1499948239",
  }
};

export interface FormSubmissionData {
  name: string;
  email: string;
  attending: string;
  meal?: string;
  hasPlusOne: boolean;
  plusOneName?: string;
  plusOneMeal?: string;
  dietary?: string;
  message?: string;
}

export const submitToGoogleForms = async (data: FormSubmissionData): Promise<boolean> => {
  try {
    // Create FormData object with the correct field names for Google Forms
    const formData = new FormData();
    
    formData.append(GOOGLE_FORM_CONFIG.fields.name, data.name);
    formData.append(GOOGLE_FORM_CONFIG.fields.email, data.email);
    formData.append(GOOGLE_FORM_CONFIG.fields.attending, data.attending);
    
    // Only add meal preference if attending
    if (data.attending === 'yes' && data.meal) {
      formData.append(GOOGLE_FORM_CONFIG.fields.meal, data.meal);
    }
    
    if (data.hasPlusOne && data.plusOneName) {
      formData.append(GOOGLE_FORM_CONFIG.fields.plusOneName, data.plusOneName);
    }
    if (data.hasPlusOne && data.plusOneMeal) {
      formData.append(GOOGLE_FORM_CONFIG.fields.plusOneMeal, data.plusOneMeal);
    }
    
    // Optional fields
    if (data.dietary) {
      formData.append(GOOGLE_FORM_CONFIG.fields.dietary, data.dietary);
    }
    if (data.message) {
      formData.append(GOOGLE_FORM_CONFIG.fields.message, data.message);
    }

    // Submit to Google Forms
    // We use fetch with no-cors mode to avoid CORS issues
    const response = await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
      method: 'POST',
      mode: 'no-cors', // This is important for Google Forms
      body: formData
    });
    console.log(response);

    // With no-cors mode, we can't read the response, but if no error is thrown, it likely succeeded
    return true;
  } catch (error) {
    console.error('Error submitting to Google Forms:', error);
    return false;
  }
};

/*
HOW TO SET UP YOUR GOOGLE FORM:

1. Go to https://forms.google.com and create a new form
2. Add the following fields (match the types):
   - Name (Short answer)
   - Email (Short answer) 
   - Will you be attending? (Multiple choice: Yes, No)
   - Meal Preference (Multiple choice: Beef, Chicken, Fish, Vegetarian)
   - Do you have a +1? (Multiple choice: Yes, No)
   - Plus One Name (Short answer)
   - Plus One Meal Preference (Multiple choice: Beef, Chicken, Fish, Vegetarian)
   - Dietary Requirements (Short answer)
   - Message for the couple (Paragraph)

3. To get the field IDs:
   - Open your form in edit mode
   - Right-click and "Inspect Element"
   - Look for input fields with names like "entry.123456789"
   - Copy these entry IDs and replace them in the GOOGLE_FORM_CONFIG above

4. To get the form action URL:
   - In your form, click "Send"
   - Copy the link
   - The form ID is the long string in the URL
   - The action URL format is: https://docs.google.com/forms/d/e/[FORM_ID]/formResponse

5. Test your form by filling it out manually first to make sure it works

6. Replace the placeholder values in GOOGLE_FORM_CONFIG with your actual values
*/
