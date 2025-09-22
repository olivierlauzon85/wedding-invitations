
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { Plus, User, UserPlus, X, Loader2 } from "lucide-react";
import { submitToGoogleForms, type FormSubmissionData } from "@/lib/googleForms";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormValues = {
  name: string;
  email: string;
  attending: string;
  meal: string;
  hasPlusOne: boolean;
  plusOneName: string;
  plusOneMeal: string;
  dietary: string;
  message: string;
};

// Helper function to get URL parameters
const getUrlParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    name: urlParams.get('name') || '',
    email: urlParams.get('email') || '',
    plusOne: urlParams.get('plusOne') || '',
  };
};

const RsvpForm: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [hasPlusOne, setHasPlusOne] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      attending: '',
      meal: '',
      hasPlusOne: false,
      plusOneName: '',
      plusOneMeal: '',
      dietary: '',
      message: ''
    }
  });

  // Pre-fill form with URL parameters on component mount
  useEffect(() => {
    const urlParams = getUrlParams();
    
    // Set form values from URL parameters
    if (urlParams.name) form.setValue('name', decodeURIComponent(urlParams.name));
    if (urlParams.email) form.setValue('email', decodeURIComponent(urlParams.email));
    
    // Handle plus one
    if (urlParams.plusOne) {
      setHasPlusOne(true);
      form.setValue('hasPlusOne', true);
      
      if (urlParams.plusOne !== 'true' && urlParams.plusOne !== '1') {
        // If plusOne parameter contains a name (not just true/1)
        form.setValue('plusOneName', decodeURIComponent(urlParams.plusOne));
      }
    }
  }, [form]);

  const attending = form.watch('attending');

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare data for Google Forms
      const submissionData: FormSubmissionData = {
        name: data.name,
        email: data.email,
        attending: data.attending,
        meal: data.meal,
        hasPlusOne: data.hasPlusOne,
        plusOneName: data.plusOneName,
        plusOneMeal: data.plusOneMeal,
        dietary: data.dietary,
        message: data.message,
      };

      // Submit to Google Forms
      const success = await submitToGoogleForms(submissionData);
      
      if (success) {
        // Show success message
        toast({
          title: t('rsvp.thanks'),
          description: `${data.name}, ${data.attending === 'yes' ? 
            t('rsvp.attending.yes').toLowerCase() : 
            t('rsvp.attending.no').toLowerCase()}`,
        });
        
        setSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      toast({
        title: "Error",
        description: "There was an error submitting your RSVP. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePlusOne = () => {
    setHasPlusOne(!hasPlusOne);
    form.setValue('hasPlusOne', !hasPlusOne);
    if (!hasPlusOne) {
      form.reset({ ...form.getValues(), plusOneName: '', plusOneMeal: '' });
    }
  };

  return (
    <section id="rsvp" className="section-wrapper bg-fall-pink/5">
      <div className="container-wedding">
        <h2 className="section-title mb-4">{t('rsvp.title')}</h2>
        <p className="text-center text-muted-foreground mb-8">{t('rsvp.deadline')}</p>
        
        <Card className="max-w-2xl mx-auto border-fall-pink/20 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-serif text-fall-red text-2xl text-center">{t('rsvp.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('rsvp.name')}</FormLabel>
                        <FormControl>
                          <Input {...field} required />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('rsvp.email')}</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} required />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="attending"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel>{t('rsvp.attending')}</FormLabel>
                        <FormControl>
                          <RadioGroup
                            value={field.value}
                            onValueChange={field.onChange}
                            className="flex space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="attending-yes" />
                              <Label htmlFor="attending-yes">{t('rsvp.attending.yes')}</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="attending-no" />
                              <Label htmlFor="attending-no">{t('rsvp.attending.no')}</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  {attending === 'yes' && (
                    <>
                      <FormField
                        control={form.control}
                        name="meal"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('rsvp.meal')}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder={t('rsvp.meal.select')} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="beef">{t('rsvp.meal.beef')}</SelectItem>
                                <SelectItem value="chicken">{t('rsvp.meal.chicken')}</SelectItem>
                                <SelectItem value="fish">{t('rsvp.meal.fish')}</SelectItem>
                                <SelectItem value="vegetarian">{t('rsvp.meal.vegetarian')}</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={togglePlusOne}
                          className={`${hasPlusOne ? 'bg-fall-orange/10' : 'bg-transparent'}`}
                        >
                          {hasPlusOne ? <UserPlus className="mr-2" /> : <User className="mr-2" />}
                          {t('rsvp.plusOne.toggle')}
                          {hasPlusOne ? <X className="ml-2" /> : <Plus className="ml-2" />}
                        </Button>
                      </div>
                      
                      {hasPlusOne && (
                        <div className="space-y-4 p-4 border border-fall-orange/20 rounded-md bg-fall-orange/5">
                          <FormField
                            control={form.control}
                            name="plusOneName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('rsvp.plusOne.name')}</FormLabel>
                                <FormControl>
                                  <Input {...field} required={hasPlusOne} />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="plusOneMeal"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>{t('rsvp.plusOne.meal')}</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder={t('rsvp.meal.select')} />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="beef">{t('rsvp.meal.beef')}</SelectItem>
                                    <SelectItem value="chicken">{t('rsvp.meal.chicken')}</SelectItem>
                                    <SelectItem value="fish">{t('rsvp.meal.fish')}</SelectItem>
                                    <SelectItem value="vegetarian">{t('rsvp.meal.vegetarian')}</SelectItem>
                                  </SelectContent>
                                </Select>
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                      
                      <FormField
                        control={form.control}
                        name="dietary"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('rsvp.dietary')}</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormDescription>{t('rsvp.dietary.description')}</FormDescription>
                          </FormItem>
                        )}
                      />
                    </>
                  )}
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t('rsvp.message')}</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-fall-orange hover:bg-fall-red text-white disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      t('rsvp.submit')
                    )}
                  </Button>
                </form>
              </Form>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-serif text-fall-red mb-4">{t('rsvp.thanks')}</h3>
                <p className="text-muted-foreground">{form.getValues().attending === 'yes' ? 
                  t('rsvp.attending.yes') : 
                  t('rsvp.attending.no')}</p>
                <Button 
                  className="mt-6 bg-fall-orange hover:bg-fall-red text-white"
                  onClick={() => setSubmitted(false)}
                >
                  {t('rsvp.submit')}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RsvpForm;
