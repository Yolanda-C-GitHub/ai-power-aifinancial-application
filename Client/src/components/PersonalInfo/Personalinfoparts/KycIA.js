import React from 'react'
import './kycIA.css'
import {Card, Form, FloatingLabel, Accordion} from 'react-bootstrap'

export default function KycIA() {
    return (
        <Card className='KycInfoCard'>
            <Form.Group>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item>
                        <Accordion.Header> IA </Accordion.Header>
                        <Accordion.Body>
                            <FloatingLabel className='kycquestions' label='1. How old are you?'>
                                <Form.Control 
                                    placeholder='1. How old are you?'
                                    value=''
                                    onChange={(e) => {
                                    
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='2. When do you plan to start withdrawing at least 25% of your savings?'>
                                <Form.Control 
                                    placeholder='2. When do you plan to start withdrawing at least 25% of your savings?'
                                    value=''
                                    onChange={(e) => {
                                    
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='3. Over the next five years, you plan to:'>
                                <Form.Control 
                                    placeholder='3. Over the next five years, you plan to:'
                                    value=''
                                    onChange={(e) => {
                                    
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='4. What is your gross annual income? (before taxes)'>
                                <Form.Control 
                                    placeholder='4. What is your gross annual income? (before taxes)'
                                    value=''
                                    onChange={(e) => {
                                    
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='5. What is your net worth? (assets minus liabilities)'>
                                <Form.Control 
                                    placeholder='5. What is your net worth? (assets minus liabilities)'
                                    value=''
                                    onChange={(e) => {
                                    
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='6. Indicate your level of tolerance toward the risks related to the investment of your money.'>
                                <Form.Control 
                                    placeholder='6. Indicate your level of tolerance toward the risks related to the investment of your money.'
                                    value=''
                                    onChange={(e) => {
                                    
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='7. You have the possibility of investing $10,000 for one year. After one year, in what range would you accept the final potential value of your investment?'>
                                <Form.Control 
                                    type='text'
                                    placeholder='7. You have the possibility of investing $10,000 for one year. After one year, in what range would you accept the final potential value of your investment?'
                                    value=''
                                    onChange={(e) => {
                                    
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='8. What is your level of knowledge about investments?'>
                                <Form.Control 
                                    placeholder='8. What is your level of knowledge about investments?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}
                                />
                            </FloatingLabel>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
                <Accordion defaultActiveKey="0">
                    <Accordion.Item>
                        <Accordion.Header>Manual Life</Accordion.Header>
                        <Accordion.Body>            
                            <FloatingLabel className='kycquestions' label='1. What is your investment horizon - when will you want to use your invested money?'>
                                <Form.Control 
                                    placeholder='1. What is your investment horizon - when will you want to use your invested money?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}  
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='2. What is your most important investment goal?'>
                                <Form.Control 
                                    placeholder='2. What is your most important investment goal?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='3. Which of the following would best describe your level of investment knowledge?'>
                                <Form.Control 
                                    placeholder='3. Which of the following would best describe your level of investment knowledge?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='4. Please indicate which statement reflects your overall view on managing risk?'>
                                <Form.Control 
                                    placeholder='4. Please indicate which statement reflects your overall view on managing risk?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='5. If you owned an investmentthat fell by 20% over a period of 6 or 9 months, what would you do?'>
                                <Form.Control 
                                    placeholder='5. If you owned an investmentthat fell by 20% over a period of 6 or 9 months, what would you do?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='6. The following portfollos show a best and worst range of return possible in any given year. Which protfolio would you be most likely to hold?'>
                                <Form.Control 
                                    placeholder='6. The following portfollos show a best and worst range of return possible in any given year. Which protfolio would you be most likely to hold?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='7. If you could increase your chances of improving your investment returns by taking more risk, would you be:'>
                                <Form.Control 
                                    placeholder='7. If you could increase your chances of improving your investment returns by taking more risk, would you be:'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='8. What type of investor are you?'>
                                <Form.Control 
                                    placeholder='8. What type of investor are you?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>




                <Accordion defaultActiveKey='0'>
                    <Accordion.Item>
                        <Accordion.Header>Canada Life</Accordion.Header>                
                        <Accordion.Body>
                            <FloatingLabel className='kycquestions' label='1. Why do you want to start investing?'>
                                <Form.Control 
                                    placeholder='1. Why do you want to start investing?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='2. What’s your goal for your investment portfolio?'>
                                <Form.Control 
                                    placeholder='2. What’s your goal for your investment portfolio?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='3. How old are you?'>
                                <Form.Control 
                                    placeholder='3. How old are you?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='4. What is your current annual family income (including pensions) before taxes?'>
                                <Form.Control 
                                    placeholder='4. What is your current annual family income (including pensions) before taxes?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='5. After deducting any loan or mortgage balances, what is your immediate family’s overall net worth?'>
                                <Form.Control 
                                    placeholder='5. After deducting any loan or mortgage balances, what is your immediate family’s overall net worth?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='6. When do you anticipate using this money?'>
                                <Form.Control 
                                    placeholder='6. When do you anticipate using this money??'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='7. When you need this money, how will you withdraw it?'>
                                <Form.Control 
                                    placeholder='7. When you need this money, how will you withdraw it?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='8. What are your plans for withdrawals and/or additional contributions to your investments over the next five years?'>
                                <Form.Control 
                                    placeholder='8. What are your plans for withdrawals and/or additional contributions to your investments over the next five years?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='9. Which best describes how much you know about investing?'>
                                <Form.Control 
                                    placeholder='9. Which best describes how much you know about investing?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='10. If your investments lose significant value because of downturns in the market, how long are you prepared to hold your existing investments in anticipation of a recovery in value?'>
                                <Form.Control 
                                    placeholder='10. If your investments lose significant value because of downturns in the market, how long are you prepared to hold your existing investments in anticipation of a recovery in value?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='11. Assuming that you are investing $100,000 for the long term, what is the maximum drop in your portfolio’s value that you could comfortably tolerate in any given year?'>
                                <Form.Control 
                                    placeholder='11. Assuming that you are investing $100,000 for the long term, what is the maximum drop in your portfolio’s value that you could comfortably tolerate in any given year?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='12. Which of the following statements would you feel most correctly describes your investment philosophy?'>
                                <Form.Control 
                                    placeholder='12. Which of the following statements would you feel most correctly describes your investment philosophy?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='13. A portfolio is a basket of different investments. The returns earned by a portfolio depend on its mix of investments. The following graph shows the probable range of returns (from best to worst) of four hypothetical portfolios over a one-year period. Which of these portfolios wouldyou prefer to invest in?'>
                                <Form.Control 
                                    className='kycControlSize'
                                    placeholder='13. A portfolio is a basket of different investments. The returns earned by a portfolio depend on its mix of investments. The following graph shows the probable range of returns (from best to worst) of four hypothetical portfolios over a one-year period. Which of these portfolios wouldyou prefer to invest in?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='14. Some investors are more willing than others to accept periodic declines in the value of the portfolio as a trade-off for potentially higher long-term returns. Which response best represents your feelings toward the following statement?'>
                                <Form.Control 
                                    className='kycControlSize'
                                    placeholder='14. Some investors are more willing than others to accept periodic declines in the value of the portfolio as a trade-off for potentially higher long-term returns. Which response best represents your feelings toward the following statement?'
                                    value=''
                                    onChange={(e) => {
                                        
                                    }}

                                />
                            </FloatingLabel>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Form.Group>
        </Card>
    )
}
