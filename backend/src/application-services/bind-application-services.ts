/* eslint @typescript-eslint/no-explicit-any: 0 */
import { Container } from 'inversify';
import AutoBind from '@framework/di/autobind';

export default async function bindApplicationServices(container: Container): Promise<void> {
  AutoBind(__dirname, container);
}
