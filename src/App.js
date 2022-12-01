import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <section className="vh-100 gradient-custom">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-color" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center">

                                <div className="mb-md-5">
                                    <img src='/img/logo.png' style={{width: '60%'}} />
                                    <h3 className="fw-bold mb-2 text-white">Welcome to Spinnii</h3>
                                    <p className="text-white-50 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                                    <div className="row">
                                        <div className='col-md-12'>
                                            <a className="btn btn-lg btn-block btn-outline-light rounded-pill btn-custom">
                                                <img src='/img/spinnii.png' className='icon' />
                                                Continue with Spinnii
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className='col-md-12 mt-3'>
                                            <a className="btn btn-lg btn-block btn-outline-light rounded-pill btn-custom">
                                                <img src='/img/apple.png' className='icon' />
                                                Continue with Apple
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className='col-md-12 mt-3'>
                                            <a className="btn btn-lg btn-block btn-outline-light rounded-pill btn-custom">
                                                <img src='/img/google.png' className='icon' />
                                                Continue with Google
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row ">
                                        <div className='col-md-12 mt-3'>
                                            <a className="btn btn-lg btn-block btn-outline-light rounded-pill btn-custom">
                                                <img src='/img/facebook.png' className='icon' />
                                                Continue with Facebook
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className='col-md-12 mt-3 mb-0'>
                                            <a className="btn btn-lg btn-block btn-outline-light rounded-pill btn-custom">
                                                <img src='/img/opentext.png' className='icon' />
                                                Continue with OpenText
                                            </a>
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <p className="mb-0 mt-5 text-white">Already have an account? <a href="#!" className="log-in-text fw-bold">Log in</a>
                                    </p>
                                </div>
                                <div>
                                    <p className='mt-2 text-white'><a href="#!" className="log-in-text fw-bold">Terms of Service</a></p>
                                </div>
                                <div>
                                    <p className='mt-5 mb-0 text-white'>Powered by <a href="https://tiwgroup.com/spinnii/?utm_source=spinnii&utm_campaign=customer_branding&utm_medium=referral&utm_term=tysers" target="_blank" className="log-in-text fw-bold">Spinnii</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default App;