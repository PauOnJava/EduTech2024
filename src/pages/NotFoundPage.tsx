import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const NotFoundPage = () => {
    return (
        <div
            className="bg-dark"
            style={{
                height: '110vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center'}}
            >
            <div className="container bg-dark">
                <div className="row pt-5 bg-dark justify-content-center ">
                    <div className="col-12 text-center">
                        <img src="https://i.pinimg.com/originals/f0/27/bc/f027bcd3564cb029c8b924e76ad6c3f0.gif"
                             className="img-fluid" alt="under maintanance image"/>
                        <br/>
                    </div>
                    <div className="col-12  text-center text-white mt-1">
                        <h2>Salut! Momentan pagina asta nu exista.</h2>
                        <h4>Stai aproape, poate va aparea curand!</h4>
                        <a className="btn btn-outline-secondary text-white" href="/">Inapoi</a>
                    </div>
                </div>
            </div>
        </div>
                );}
                export default NotFoundPage;