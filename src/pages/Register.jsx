import { Link } from "react-router-dom";
import Nav from "./shared/Nav";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);

        const name= form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');



        console.log(name, photo,email, password);

        // console.log(form.get('password'));

        // create user
        createUser(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error=>{
          console.error(error)
        })

    }
    return (
        <div>
            <Nav></Nav>
        <h2 className="text-3xl my-10 text-center">Register</h2>
          <div className="shrink-0 w-full max-w-sm shadow-2xl  flex items-center justify-center bg-base-100 border lg:ml-[400px]">
            <form onSubmit={handleRegister} className="card-body ">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button  className="btn btn-primary">Register</button>
              </div>
              <p className="text-center mt-4 ">Already have an account? <Link to='/login'> <span className="text-blue-600">Login now</span></Link></p>
            </form>
            
          </div>
        </div>
    );
};

export default Register;