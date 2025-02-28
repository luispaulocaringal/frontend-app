import { Form, NavLink } from 'react-router';

export default function Login() {
  return (
    <div className="md:container md:mx-auto h-lvh content-center">
      <Form className="rounded-lg shadow-lg border-1 border-gray-200" method="POST">
        <div className="m-8">
          <div>
            <h1>IP Management System</h1>
          </div><br/>
          <div className="grid grid-rows-4 grid-flow-col gap-4">
            <div>
              <label>
                <b>Username</b>{" "}<br/>
                <input className="rounded border-1 border-gray-400 w-96" type="text" name="username"/>
              </label>
            </div>
            <div>
              <label>
                <b>Password</b>{" "}<br/>
                <input className="rounded border-1 border-gray-400 w-96" type="password" name="password"/>
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
  );
}