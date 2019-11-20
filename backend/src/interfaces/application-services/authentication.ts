import { injectable } from 'inversify';

/* eslint  @typescript-eslint/no-explicit-any: 0 */
/**
 *
 */

interface PermissionObject {
  [key: string]: boolean | PermissionObject;
}

interface JwtPayload {
  iat: number;
  exp: number;
  user: {
    _id: string;
    name: string;
    'is-admin': boolean;
  };
  permissions: PermissionObject;
  [key: string]: any;
}

@injectable()
abstract class IAuthenticationService {
  /*
    Given a JSON webtoken string (extracted from request header in middleware),
    verify that it is a valid token and return the payload.

    If invalid, the function throws Error!
  */
  public async abstract verify(token: string): Promise<string | object>;
  /*
    Create a signed token given a userId and a payload. The application service
    should take the UserID, fetch the user's data from the database, and add it to the
    payload.
  */
  public async abstract createToken(userId: string, payload: {[key: string]: any}, refresh: boolean): Promise<string>; // eslint-disable-line
  /*
    Mark a given token as invalid. The verify function should ensure that a token being used is not
    invalid, by checking against an invalid-token store.
  */
  public async abstract invalidateToken(token: string): Promise<void>;

  /*
    Asynchronously generate hash value for secure cookie. Use this to ensure that
    the same method is used to create and verify cookie strings.
  */
  public async abstract createSecureCookieHash(value: string): Promise<string>;
}

export default IAuthenticationService;
export { JwtPayload };
