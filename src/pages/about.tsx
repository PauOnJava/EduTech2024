import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMicrophone, faCog, faCalendar, faFileAlt, faImage, faLink, faUser,
    faBrain, faPaintBrush, faInfinity, faRocket
} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'

const About = () => {
    return (
        <div className="container py-5">
            <section className="mb-5">
                <h2 className="display-4 text-center mb-4">Why use Sphera Notes?</h2>
                <div className="row">
                    <div className="col-md-4 text-center mb-4">
                        <div className="position-relative d-inline-block mb-3" style={{width: '150px', height: '150px'}}>
                            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                <div className="position-relative" style={{width: '100px', height: '100px'}}>
                                    {[faCog, faCalendar, faFileAlt, faImage, faLink, faUser].map((icon, index) => (
                                        <div
                                            key={index}
                                            className="position-absolute rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                backgroundColor: ['#3b82f6', '#22c55e', '#f97316', '#8b5cf6', '#06b6d4', '#ef4444'][index],
                                                color: 'white',
                                                top: `${50 - 40 * Math.cos(2 * Math.PI * index / 6)}%`,
                                                left: `${50 + 40 * Math.sin(2 * Math.PI * index / 6)}%`,
                                                transform: 'translate(-50%, -50%)'
                                            }}
                                        >
                                            <FontAwesomeIcon icon={icon} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h3 className="h4 mb-3">Accessible</h3>
                        <p className="text-muted">With one account manage everything you do, whether it's work or school.</p>
                    </div>

                    <div className="col-md-4 text-center mb-4">
                        <div className="d-inline-block mb-3" style={{width: '150px', height: '150px'}}>
                            <div className="position-relative w-100 h-100 d-flex align-items-center justify-content-center">
                                <div className="position-absolute border border-2 border-dark rounded" style={{width: '75px', height: '75px'}}>
                                    <FontAwesomeIcon icon={faBrain} size="3x" className="position-absolute top-50 start-50 translate-middle" />
                                    <div className="position-absolute top-0 start-0 w-100 h-100 border border-2 border-dark rounded"
                                         style={{ transform: 'rotate(45deg)' }} />
                                </div>
                            </div>
                        </div>
                        <h3 className="h4 mb-3">Intelligent</h3>
                        <p className="text-muted">Enhance your workflow using our AI-powered tools.</p>
                    </div>

                    <div className="col-md-4 text-center mb-4">
                        <div className="d-inline-block mb-3" style={{width: '150px', height: '150px'}}>
                            <FontAwesomeIcon icon={faPaintBrush} size="6x" className="text-primary" />
                        </div>
                        <h3 className="h4 mb-3">The sky is the limit!</h3>
                        <p className="text-muted">The more you learn and use them, the possibilities are endless.</p>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <div className="bg-light rounded p-4">
                    <div className="text-center">
                        <button className="btn btn-light rounded-circle p-3 mb-3 shadow-sm">
                            <FontAwesomeIcon icon={faMicrophone} size="2x" className="text-danger" />
                        </button>
                        <h4 className="mb-3">Tap to speak</h4>
                        <p className="text-muted mx-auto" style={{maxWidth: '400px'}}>
                            Speech to Text: Say your thoughts out loud. Filter them out by yourself, or use Sphera AI to help you sort it out.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-5">
                <h2 className="display-4 text-center mb-4">Sphera Notes Premium</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="bg-light rounded p-4 text-center h-100">
                            <FontAwesomeIcon icon={faInfinity} size="6x" className="text-primary mb-3" />
                            <h3 className="h4 mb-3">Unlimited usage</h3>
                            <p className="text-muted">Use Sphera AI at full potential all times.</p>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="bg-light rounded p-4 text-center h-100">
                            <FontAwesomeIcon icon={faRocket} size="6x" className="text-purple mb-3" />
                            <h3 className="h4 mb-3">Complete experience</h3>
                            <p className="text-muted">Unlock the full potential of your virtual notes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-center">
                <h2 className="display-4 mb-4">Supercharge your productivity with Premium.</h2>
                <div>
                    <button className="btn btn-dark me-3">See pricing</button>
                    <button className="btn btn-outline-dark">Licensing</button>
                </div>
            </section>
        </div>
    )
}
export default About;