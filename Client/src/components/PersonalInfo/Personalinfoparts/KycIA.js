import React from 'react'
import './kycIA.css'
import {Card, Form, FloatingLabel, Accordion} from 'react-bootstrap'

export default function KycIA(params) {
    return (
        <Card className='KycInfoCard'>
            <Form.Group>
                <Accordion>
                    <Accordion.Item eventKey='4'>
                        <Accordion.Header> IA </Accordion.Header>
                        <Accordion.Body>
                            <FloatingLabel className='kycquestions' label='1. How old are you?'>
                                <Form.Control 
                                    placeholder='1. How old are you?'
                                    value={params.personalInfoKYC.IA1}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setIA1(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='2. When do you plan to start withdrawing at least 25% of your savings?'>
                                <Form.Control 
                                    placeholder='2. When do you plan to start withdrawing at least 25% of your savings?'
                                    value={params.personalInfoKYC.IA2}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setIA2(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='3. Over the next five years, you plan to:'>
                                <Form.Control 
                                    placeholder='3. Over the next five years, you plan to:'
                                    value={params.personalInfoKYC.IA3}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setIA3(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='4. What is your gross annual income? (before taxes)'>
                                <Form.Control 
                                    placeholder='4. What is your gross annual income? (before taxes)'
                                    value={params.personalInfoKYC.IA4}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setIA4(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='5. What is your net worth? (assets minus liabilities)'>
                                <Form.Control 
                                    placeholder='5. What is your net worth? (assets minus liabilities)'
                                    value={params.personalInfoKYC.IA5}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setIA5(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='6. Indicate your level of tolerance toward the risks related to the investment of your money.'>
                                <Form.Control 
                                    placeholder='6. Indicate your level of tolerance toward the risks related to the investment of your money.'
                                    value={params.personalInfoKYC.IA6}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setIA6(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='7. You have the possibility of investing $10,000 for one year. After one year, in what range would you accept the final potential value of your investment?'>
                                <Form.Control 
                                    type='text'
                                    placeholder='7. You have the possibility of investing $10,000 for one year. After one year, in what range would you accept the final potential value of your investment?'
                                    value={params.personalInfoKYC.IA7}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setIA7(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='8. What is your level of knowledge about investments?'>
                                <Form.Control 
                                    placeholder='8. What is your level of knowledge about investments?'
                                    value={params.personalInfoKYC.IA8}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setIA8(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                        </Accordion.Body>
                    </Accordion.Item>
    

                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>ManuLife</Accordion.Header>
                        <Accordion.Body>            
                            <FloatingLabel className='kycquestions' label='1. What is your investment horizon - when will you want to use your invested money?'>
                                <Form.Control 
                                    placeholder='1. What is your investment horizon - when will you want to use your invested money?'
                                    value={params.personalInfoKYC.ML1}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setML1(e.target.value)
                                    }}  
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='2. What is your most important investment goal?'>
                                <Form.Control 
                                    placeholder='2. What is your most important investment goal?'
                                    value={params.personalInfoKYC.ML2}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setML2(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='3. Which of the following would best describe your level of investment knowledge?'>
                                <Form.Control 
                                    placeholder='3. Which of the following would best describe your level of investment knowledge?'
                                    value={params.personalInfoKYC.ML3}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setML3(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='4. Please indicate which statement reflects your overall view on managing risk?'>
                                <Form.Control 
                                    placeholder='4. Please indicate which statement reflects your overall view on managing risk?'
                                    value={params.personalInfoKYC.ML4}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setML4(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='5. If you owned an investmentthat fell by 20% over a period of 6 or 9 months, what would you do?'>
                                <Form.Control 
                                    placeholder='5. If you owned an investmentthat fell by 20% over a period of 6 or 9 months, what would you do?'
                                    value={params.personalInfoKYC.ML5}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setML5(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='6. The following portfollos show a best and worst range of return possible in any given year. Which protfolio would you be most likely to hold?'>
                                <Form.Control 
                                    placeholder='6. The following portfollos show a best and worst range of return possible in any given year. Which protfolio would you be most likely to hold?'
                                    value={params.personalInfoKYC.ML6}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setML6(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='7. If you could increase your chances of improving your investment returns by taking more risk, would you be:'>
                                <Form.Control 
                                    placeholder='7. If you could increase your chances of improving your investment returns by taking more risk, would you be:'
                                    value={params.personalInfoKYC.ML7}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setML7(e.target.value)
                                    }}

                                />
                            </FloatingLabel>
                            <FloatingLabel className='kycquestions' label='8. What type of investor are you?'>
                                <Form.Control 
                                    placeholder='8. What type of investor are you?'
                                    value={params.personalInfoKYC.ML8}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setML8(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>Canada Life</Accordion.Header>                
                        <Accordion.Body>
                            <FloatingLabel className='kycquestions' label='1. Why do you want to start investing?'>
                                <Form.Control 
                                    placeholder='1. Why do you want to start investing?'
                                    value={params.personalInfoKYC.CL1}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL1(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='2. What’s your goal for your investment portfolio?'>
                                <Form.Control 
                                    placeholder='2. What’s your goal for your investment portfolio?'
                                    value={params.personalInfoKYC.CL2}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL2(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='3. How old are you?'>
                                <Form.Control 
                                    placeholder='3. How old are you?'
                                    value={params.personalInfoKYC.CL3}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL3(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='4. What is your current annual family income (including pensions) before taxes?'>
                                <Form.Control 
                                    placeholder='4. What is your current annual family income (including pensions) before taxes?'
                                    value={params.personalInfoKYC.CL4}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL4(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='5. After deducting any loan or mortgage balances, what is your immediate family’s overall net worth?'>
                                <Form.Control 
                                    placeholder='5. After deducting any loan or mortgage balances, what is your immediate family’s overall net worth?'
                                    value={params.personalInfoKYC.CL5}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL5(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='6. When do you anticipate using this money?'>
                                <Form.Control 
                                    placeholder='6. When do you anticipate using this money??'
                                    value={params.personalInfoKYC.CL6}
                                    onChange={(e) => {  
                                        params.personalInfoKYC.setCL6(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='7. When you need this money, how will you withdraw it?'>
                                <Form.Control 
                                    placeholder='7. When you need this money, how will you withdraw it?'
                                    value={params.personalInfoKYC.CL7}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL7(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='8. What are your plans for withdrawals and/or additional contributions to your investments over the next five years?'>
                                <Form.Control 
                                    placeholder='8. What are your plans for withdrawals and/or additional contributions to your investments over the next five years?'
                                    value={params.personalInfoKYC.CL8}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL8(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='9. Which best describes how much you know about investing?'>
                                <Form.Control 
                                    placeholder='9. Which best describes how much you know about investing?'
                                    value={params.personalInfoKYC.CL9}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL9(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='10. If your investments lose significant value because of downturns in the market, how long are you prepared to hold your existing investments in anticipation of a recovery in value?'>
                                <Form.Control 
                                    placeholder='10. If your investments lose significant value because of downturns in the market, how long are you prepared to hold your existing investments in anticipation of a recovery in value?'
                                    value={params.personalInfoKYC.CL10}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL10(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='11. Assuming that you are investing $100,000 for the long term, what is the maximum drop in your portfolio’s value that you could comfortably tolerate in any given year?'>
                                <Form.Control 
                                    placeholder='11. Assuming that you are investing $100,000 for the long term, what is the maximum drop in your portfolio’s value that you could comfortably tolerate in any given year?'
                                    value={params.personalInfoKYC.CL11}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL11(e.target.value)                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='12. Which of the following statements would you feel most correctly describes your investment philosophy?'>
                                <Form.Control 
                                    placeholder='12. Which of the following statements would you feel most correctly describes your investment philosophy?'
                                    value={params.personalInfoKYC.CL12}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL12(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='13. A portfolio is a basket of different investments. The returns earned by a portfolio depend on its mix of investments. The following graph shows the probable range of returns (from best to worst) of four hypothetical portfolios over a one-year period. Which of these portfolios wouldyou prefer to invest in?'>
                                <Form.Control 
                                    className='kycControlSize'
                                    placeholder='13. A portfolio is a basket of different investments. The returns earned by a portfolio depend on its mix of investments. The following graph shows the probable range of returns (from best to worst) of four hypothetical portfolios over a one-year period. Which of these portfolios wouldyou prefer to invest in?'
                                    value={params.personalInfoKYC.CL13}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL13(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='kycquestions' label='14. Some investors are more willing than others to accept periodic declines in the value of the portfolio as a trade-off for potentially higher long-term returns. Which response best represents your feelings toward the following statement?'>
                                <Form.Control 
                                    className='kycControlSize'
                                    placeholder='14. Some investors are more willing than others to accept periodic declines in the value of the portfolio as a trade-off for potentially higher long-term returns. Which response best represents your feelings toward the following statement?'
                                    value={params.personalInfoKYC.CL14}
                                    onChange={(e) => {
                                        params.personalInfoKYC.setCL14(e.target.value)
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
