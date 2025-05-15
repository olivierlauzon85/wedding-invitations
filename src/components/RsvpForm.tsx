
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const RsvpForm: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: '',
    guests: 1,
    dietary: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attending: value }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setFormData((prev) => ({ ...prev, guests: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: t('rsvp.thanks'),
      description: `${formData.name}, ${formData.attending === 'yes' ? 
        t('rsvp.attending.yes').toLowerCase() : 
        t('rsvp.attending.no').toLowerCase()}`,
    });
    
    setSubmitted(true);
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('rsvp.name')}</Label>
                  <Input 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('rsvp.email')}</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>{t('rsvp.attending')}</Label>
                  <RadioGroup 
                    value={formData.attending} 
                    onValueChange={handleRadioChange} 
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
                </div>
                
                {formData.attending === 'yes' && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="guests">{t('rsvp.guests')}</Label>
                      <Input 
                        id="guests" 
                        name="guests"
                        type="number"
                        min={1}
                        value={formData.guests}
                        onChange={handleNumberChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dietary">{t('rsvp.dietary')}</Label>
                      <Input 
                        id="dietary" 
                        name="dietary"
                        value={formData.dietary}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t('rsvp.message')}</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-fall-orange hover:bg-fall-red text-white"
                >
                  {t('rsvp.submit')}
                </Button>
              </form>
            ) : (
              <div className="text-center py-10">
                <h3 className="text-2xl font-serif text-fall-green mb-4">{t('rsvp.thanks')}</h3>
                <p className="text-muted-foreground">{formData.attending === 'yes' ? 
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
