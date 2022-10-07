import Link from "next/link";

function RegisterForm() {
  return (
    <form className="absolute bg-white border-2 p-4 rounded-xl bg-opacity-50 backdrop-blur-lg drop-shadow-lg">
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="row-sm-2 col-form-label">
          Full Name
        </label>
        <div className="col-sm">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>

      <div className="row mb-4">
        <label htmlFor="inputPassword3" className="row-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm">
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
      </div>

      <div className="row mb-4">
        <label htmlFor="inputPassword3" className="row-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm">
          <input type="password" className="form-control" id="inputPassword3" />
        </div>
      </div>

      <Link href="/" passHref>
        <a>
          <button type="submit" className="btn btn-light mr-5">
            Sign in
          </button>
        </a>
      </Link>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
