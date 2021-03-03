
import React, {useState} from 'react'
import { Upload, message, Steps, Row, Col, DatePicker, Input, Button, Radio, Divider, Checkbox  } from 'antd';
// import DashboardForm from './components/DashboardForm'
    
const { Dragger } = Upload;
const { Step } = Steps;
const Registration = () => {
  const [registrationStep, setRegistrationStep] = useState(0);
  const props = {
    name: 'file',
    multiple: true,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  
  const handleNextClick = () => {
    console.log(registrationStep)
    setRegistrationStep(registrationStep + 1)
  }
   
  const handleBackClick = () => {
    setRegistrationStep(registrationStep - 1)
  }
   
  return (
    <section className="MD-registration-section">
      <Row>
        <Col md={6} xs={0}>
        
        </Col>
        <Col md={12} xs={24}>
            <section className="_text-center">
              <img src="https://stg.keepwell.clinic/static/media/logo.3e277677.png" alt="logo" class="responsive" width="100%" height="100%" className="_spacer-md" /> 

            </section>
            <Steps current={registrationStep} className="_spacer-md">
              <Step title="PRC Validation" description="" />
              <Step title="Personal Information" />
              <Step title="Personal Details" />
              <Step title="Password" />
            </Steps>
          {registrationStep === 0 && 
            <div>
              <section className="_spacer-sm">
                <Dragger {...props} className="_spacer-sm">
                  <p className="ant-upload-drag-icon">
                    {/* <InboxOutlined /> */}
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                  </p>
                </Dragger>
                <Row className="PRC-Details">
                  <Col xs={24} md={14}>
                    <Input placeholder="PRC Number"/>
                  </Col>
                  <Col xs={24} md={5}>
                  < DatePicker placeholder="Date Issued"/>
                  </Col>
                  <Col xs={24} md={5}>
                    <DatePicker placeholder="Date Expired"/>
                  </Col>
                </Row>  
              </section>
            </div>
          }
          {registrationStep === 1 && 
            <div>
              <section className="_spacer-sm">
                <Row>
                    <Col xs={24} md={3}>
                    <Input placeholder="Prefix"/>
                    </Col>
                    <Col xs={24} md={7}>
                    <Input placeholder="First Name"/>
                    </Col>
                    <Col xs={24} md={7}>
                    <Input placeholder="Middle Name"/>
                    </Col>
                    <Col xs={24} md={7}>
                    <Input placeholder="Last Name"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={8}>
                    <Input placeholder="Suffix 1"/>
                    </Col>
                    <Col xs={24} md={8}>
                    <Input placeholder="Suffix 2"/>
                    </Col>
                    <Col xs={24} md={8}>
                    <Input placeholder="Fellowship"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={8}>
                    <Input placeholder="PTR Number"/>
                    </Col>
                    <Col xs={24} md={8}>
                    <Input placeholder="TIN(Tax Indentification Name)"/>
                    </Col>
                    <Col xs={24} md={8}>
                    <Input placeholder="Birthday"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={8}>
                    <Input placeholder="Email Address"/>
                    </Col>
                    <Col xs={24} md={8}>
                    <Input placeholder="Confirm Email Address"/>
                    </Col>
                    <Col xs={24} md={8}>
                    <Radio defaultChecked={false} >
                      Male
                    </Radio>
                    <Radio defaultChecked >
                      Female
                    </Radio>
                    </Col>
                </Row>
              </section>
            </div>
          }
          {registrationStep === 2 && 
            <div>
              <section className="_spacer-sm">
                <p>Residential Address</p>
                <Divider/>
              <Row>
                <Col>
                <Input className="_spacer-sm" placeholder="Address Line 1 (Street, Subd or Village)"/>
                </Col>
              </Row>
                <Row>
                  <Col xs={24} md={12}>
                    <Input className="_spacer-sm" placeholder="City"/>
                  </Col>
                  <Col xs={24} md={12}> 
                    <Input className="_spacer-sm" placeholder="Province"/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} md={12}>
                    <Input className="_spacer-sm" placeholder="Zipcode"/>
                  </Col>
                  <Col xs={24} md={12}> 
                    <Input className="_spacer-sm" placeholder="Country"/>
                  </Col>
                </Row>
                <p>Clinic Address</p>
                <Divider/>
              <Row>
                <Col>
                <Input className="_spacer-sm" placeholder="Clinic Name"/>
                </Col>
                <Col>
                <Input className="_spacer-sm" placeholder="Address Line 1 (Street, Subd or Village)"/>
                </Col>
              </Row>
                <Row>
                  <Col xs={24} md={12}>
                    <Input className="_spacer-sm" placeholder="City"/>
                  </Col>
                  <Col xs={24} md={12}> 
                    <Input className="_spacer-sm" placeholder="Province"/>
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} md={12}>
                    <Input className="_spacer-sm" placeholder="Zipcode"/>
                  </Col>
                  <Col xs={24} md={12}> 
                    <Input className="_spacer-sm" placeholder="Country"/>
                  </Col>
                </Row>
               
                {/* <Row>
                    <Col xs={24} md={12}>
                      <p
                    </Col>
                    <Col xs={24} md={12}>
                    <Input placeholder="TIN(Tax Indentification Name)"/>
                    </Col>
                </Row> */}
              </section>
            </div>
          }
          {registrationStep === 3 && 
            <div>
              <section className="_spacer-sm">
                <p>Personal Details</p>
                <Divider/>
                <Row>
                  <Col xs={24} md={12}>
                    <Input className="_spacer-sm" placeholder="Specialization"/>
                  </Col>
                  <Col xs={24} md={12}> 
                    <Input className="_spacer-sm" placeholder="Sub-Specialization"/>
                  </Col>
                </Row>
              <Row>
                <Col>
                <Input className="_spacer-sm" placeholder="Other Sub-Specialization"/>
                </Col>
              </Row>
              <p>Setting up you profesional fee</p>
              <Divider/>
              <Row>
                <Col>
                <Input className="_spacer-sm" placeholder="Consultation fee"/>
                </Col>
              </Row>
              <p>Bank Account</p>
              <Divider/>
              <Row>
                <Col>
                <Input className="_spacer-sm" placeholder="Bank"/>
                </Col>
                <Col>
                <Input className="_spacer-sm" placeholder="Account Name"/>
                </Col>
                <Col>
                <Input className="_spacer-sm" placeholder="Account Number"/>
                </Col>
                <Col>
                <Input className="_spacer-sm" placeholder="Account Type"/>
                </Col>
              </Row>
              <p>Upload Requiements</p>
              <Divider/>
              <Dragger {...props} className="_spacer-sm">
                  <p className="ant-upload-drag-icon">
                    {/* <InboxOutlined /> */}
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                  </p>
              </Dragger>
              <p>Signature Specimen</p>
              <Divider/>
              <Dragger {...props} className="_spacer-sm">
                  <p className="ant-upload-drag-icon">
                    {/* <InboxOutlined /> */}
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                    band files
                  </p>
              </Dragger>

              </section>
            </div>
          }
          {registrationStep === 4 && 
            <div>
              <section className="_spacer-sm">
                <p>Password</p>
                <Divider/>
                <Row>
                  <Col xs={24} md={12}>
                    <Input.Password className="_spacer-sm" placeholder="Password"/>
                  </Col>
                  <Col xs={24} md={12}> 
                    <Input.Password className="_spacer-sm" placeholder="Confirm Password"/>
                  </Col>
                </Row>
              <Row>
              <Checkbox>I agree to the Terms and Conditions and the Privacy Policy</Checkbox>
              </Row>
              </section>
            </div>
          }
          {registrationStep === 5 && 
            <div>
              <section className="_spacer-sm">
                <p>Verify Mobile Number</p>
                <Divider/>
                <p>A One Time Password (OTP) has been sent to your mobile number +63*** *** ****.
Please enter the OTP below to verify your mobile number.</p>
                    <Input.Password className="_spacer-sm" placeholder="XXXXXX"/>
                 
              <Row>
              <Checkbox>I agree to the Terms and Conditions and the Privacy Policy</Checkbox>
              </Row>
              </section>
              
          <section className="action-btn">
            <Button onClick={() => window.location = "/"}>Confirm Code</Button>
            <Button >Resend Code</Button>
          </section>
            </div>
          }
          
          {registrationStep !== 5 && 
          <section className="action-btn">
            <Button onClick={handleBackClick}>Back</Button>
            <Button onClick={handleNextClick}>Next</Button>
          </section>
}
        </Col>
        <Col md={6} xs={0}>
        
        </Col>
      </Row>
     
    </section>
  )
}

export default Registration


