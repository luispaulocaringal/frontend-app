import { Form, NavLink } from 'react-router';

export default function Login() {
  return (
    <div className="content-center md:container md:mx-auto h-lvh">
      <div className="flex justify-center">
        <Form className="rounded-lg shadow-lg border-1 border-gray-200 w-xl h-100" method="POST">
          <div className="m-8">
            <div>
              <h1>IP Management System</h1>
            </div>
            <br/>
            <div className="grid grid-rows-4 grid-flow-col gap-5">
              <div>
                <label>
                  <b>Username</b>{" "}
                  <br/>
                  <input className="rounded border-1 border-gray-400 w-full px-2" type="text" name="username"/>
                </label>
              </div>
              <div>
                <label>
                  <b>Password</b>{" "}
                  <br/>
                  <input className="rounded border-1 border-gray-400 w-full px-2" type="password" name="password"/>
                </label>
              </div>
              <div>
                <button className="rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" type="submit">Login</button>
              </div>
              <div>
                <NavLink className="text-xs text-blue-500" to="/register">Forgot Password</NavLink><br/>
                <NavLink className="text-xs text-blue-500" to="/register">Create an account</NavLink>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}