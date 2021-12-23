import React from 'react'
import './cokyc.css'
import {Card, Form, FloatingLabel, Accordion} from 'react-bootstrap'

export default function CoKycIA(params) {
    return (
        <Card className='CoKycInfoCard'>
            <Form.Group>
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header> IA </Accordion.Header>
                        <Accordion.Body>
                            <FloatingLabel className='cokycquestions' label='1. How old are you?'>
                                <Form.Select 
                                    placeholder='1. How old are you?'
                                    value={params.copersonalInfoKYC.coIA1}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoIA1(e.target.value)
                                    }}
                                >
                                    <option value=''>Select</option>
                                    <option value='2'>B_2</option>
                                </Form.Select>
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='2. When do you plan to start withdrawing at least 25% of your savings?'>
                                <Form.Control 
                                    placeholder='2. When do you plan to start withdrawing at least 25% of your savings?'
                                    value={params.copersonalInfoKYC.coIA2}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoIA2(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='3. Over the next five years, you plan to:'>
                                <Form.Control 
                                    placeholder='3. Over the next five years, you plan to:'
                                    value={params.copersonalInfoKYC.coIA3}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoIA3(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='4. What is your gross annual income? (before taxes)'>
                                <Form.Control 
                                    placeholder='4. What is your gross annual income? (before taxes)'
                                    value={params.copersonalInfoKYC.coIA4}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoIA4(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='5. What is your net worth? (assets minus liabilities)'>
                                <Form.Control 
                                    placeholder='5. What is your net worth? (assets minus liabilities)'
                                    value={params.copersonalInfoKYC.coIA5}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoIA5(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='6. Indicate your level of tolerance toward the risks related to the investment of your money.'>
                                <Form.Control 
                                    placeholder='6. Indicate your level of tolerance toward the risks related to the investment of your money.'
                                    value={params.copersonalInfoKYC.coIA6}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoIA6(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='7. You have the possibility of investing $10,000 for one year. After one year, in what range would you accept the final potential value of your investment?'>
                                <Form.Control 
                                    type='text'
                                    placeholder='7. You have the possibility of investing $10,000 for one year. After one year, in what range would you accept the final potential value of your investment?'
                                    value={params.copersonalInfoKYC.coIA7}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoIA7(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='8. What is your level of knowledge about investments?'>
                                <Form.Control 
                                    placeholder='8. What is your level of knowledge about investments?'
                                    value={params.copersonalInfoKYC.coIA8}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoIA8(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                        </Accordion.Body>
                    </Accordion.Item>
    

                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>Manual Life</Accordion.Header>
                        <Accordion.Body>            
                            <FloatingLabel className='cokycquestions' label='1. What is your investment horizon - when will you want to use your invested money?'>
                                <Form.Control 
                                    placeholder='1. What is your investment horizon - when will you want to use your invested money?'
                                    value={params.copersonalInfoKYC.coML1}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoML1(e.target.value)
                                    }}  
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='2. What is your most important investment goal?'>
                                <Form.Control 
                                    placeholder='2. What is your most important investment goal?'
                                    value={params.copersonalInfoKYC.coML2}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoML2(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='3. Which of the following would best describe your level of investment knowledge?'>
                                <Form.Control 
                                    placeholder='3. Which of the following would best describe your level of investment knowledge?'
                                    value={params.copersonalInfoKYC.coML3}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoML3(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='4. Please indicate which statement reflects your overall view on managing risk?'>
                                <Form.Control 
                                    placeholder='4. Please indicate which statement reflects your overall view on managing risk?'
                                    value={params.copersonalInfoKYC.coML4}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoML4(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='5. If you owned an investmentthat fell by 20% over a period of 6 or 9 months, what would you do?'>
                                <Form.Control 
                                    placeholder='5. If you owned an investmentthat fell by 20% over a period of 6 or 9 months, what would you do?'
                                    value={params.copersonalInfoKYC.coML5}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoML5(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='6. The following portfollos show a best and worst range of return possible in any given year. Which protfolio would you be most likely to hold?'>
                                <Form.Control 
                                    placeholder='6. The following portfollos show a best and worst range of return possible in any given year. Which protfolio would you be most likely to hold?'
                                    value={params.copersonalInfoKYC.coML6}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoML6(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='7. If you could increase your chances of improving your investment returns by taking more risk, would you be:'>
                                <Form.Control 
                                    placeholder='7. If you could increase your chances of improving your investment returns by taking more risk, would you be:'
                                    value={params.copersonalInfoKYC.coML7}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoML7(e.target.value)
                                    }}

                                />
                            </FloatingLabel>
                            <FloatingLabel className='cokycquestions' label='8. What type of investor are you?'>
                                <Form.Control 
                                    placeholder='8. What type of investor are you?'
                                    value={params.copersonalInfoKYC.coML8}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoML8(e.target.value)
                                    }}
                                />
                            </FloatingLabel>
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>Canada Life</Accordion.Header>                
                        <Accordion.Body>
                            <FloatingLabel className='cokycquestions' label='1. Why do you want to start investing?'>
                                <Form.Control 
                                    placeholder='1. Why do you want to start investing?'
                                    value={params.copersonalInfoKYC.coCL1}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL1(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='2. What’s your goal for your investment portfolio?'>
                                <Form.Control 
                                    placeholder='2. What’s your goal for your investment portfolio?'
                                    value={params.copersonalInfoKYC.coCL2}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL2(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='3. How old are you?'>
                                <Form.Control 
                                    placeholder='3. How old are you?'
                                    value={params.copersonalInfoKYC.coCL3}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL3(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='4. What is your current annual family income (including pensions) before taxes?'>
                                <Form.Control 
                                    placeholder='4. What is your current annual family income (including pensions) before taxes?'
                                    value={params.copersonalInfoKYC.coCL4}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL4(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='5. After deducting any loan or mortgage balances, what is your immediate family’s overall net worth?'>
                                <Form.Control 
                                    placeholder='5. After deducting any loan or mortgage balances, what is your immediate family’s overall net worth?'
                                    value={params.copersonalInfoKYC.coCL5}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL5(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='6. When do you anticipate using this money?'>
                                <Form.Control 
                                    placeholder='6. When do you anticipate using this money??'
                                    value={params.copersonalInfoKYC.coCL6}
                                    onChange={(e) => {  
                                        params.copersonalInfoKYC.setcoCL6(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='7. When you need this money, how will you withdraw it?'>
                                <Form.Control 
                                    placeholder='7. When you need this money, how will you withdraw it?'
                                    value={params.copersonalInfoKYC.coCL7}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL7(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='8. What are your plans for withdrawals and/or additional contributions to your investments over the next five years?'>
                                <Form.Control 
                                    placeholder='8. What are your plans for withdrawals and/or additional contributions to your investments over the next five years?'
                                    value={params.copersonalInfoKYC.coCL8}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL8(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='9. Which best describes how much you know about investing?'>
                                <Form.Control 
                                    placeholder='9. Which best describes how much you know about investing?'
                                    value={params.copersonalInfoKYC.coCL9}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL9(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='10. If your investments lose significant value because of downturns in the market, how long are you prepared to hold your existing investments in anticipation of a recovery in value?'>
                                <Form.Control 
                                    placeholder='10. If your investments lose significant value because of downturns in the market, how long are you prepared to hold your existing investments in anticipation of a recovery in value?'
                                    value={params.copersonalInfoKYC.coCL10}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL10(e.target.value)
                                    }}
                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='11. Assuming that you are investing $100,000 for the long term, what is the maximum drop in your portfolio’s value that you could comfortably tolerate in any given year?'>
                                <Form.Control 
                                    placeholder='11. Assuming that you are investing $100,000 for the long term, what is the maximum drop in your portfolio’s value that you could comfortably tolerate in any given year?'
                                    value={params.copersonalInfoKYC.coCL11}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL11(e.target.value)                                        
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='12. Which of the following statements would you feel most correctly describes your investment philosophy?'>
                                <Form.Control 
                                    placeholder='12. Which of the following statements would you feel most correctly describes your investment philosophy?'
                                    value={params.copersonalInfoKYC.coCL12}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL12(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='13. A portfolio is a basket of different investments. The returns earned by a portfolio depend on its mix of investments. The following graph shows the probable range of returns (from best to worst) of four hypothetical portfolios over a one-year period. Which of these portfolios wouldyou prefer to invest in?'>
                                <Form.Control 
                                    className='cokycControlSize'
                                    placeholder='13. A portfolio is a basket of different investments. The returns earned by a portfolio depend on its mix of investments. The following graph shows the probable range of returns (from best to worst) of four hypothetical portfolios over a one-year period. Which of these portfolios wouldyou prefer to invest in?'
                                    value={params.copersonalInfoKYC.coCL13}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL13(e.target.value)
                                    }}

                                />
                            </FloatingLabel>

                            <FloatingLabel className='cokycquestions' label='14. Some investors are more willing than others to accept periodic declines in the value of the portfolio as a trade-off for potentially higher long-term returns. Which response best represents your feelings toward the following statement?'>
                                <Form.Control 
                                    className='cokycControlSize'
                                    placeholder='14. Some investors are more willing than others to accept periodic declines in the value of the portfolio as a trade-off for potentially higher long-term returns. Which response best represents your feelings toward the following statement?'
                                    value={params.copersonalInfoKYC.coCL14}
                                    onChange={(e) => {
                                        params.copersonalInfoKYC.setcoCL14(e.target.value)
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
