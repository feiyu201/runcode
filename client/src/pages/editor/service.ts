import request from '~utils/request';

export interface IRunCodeRequest {}

export interface IRunCodeResponse {
  code?: number;
  output?: string;
}

export function runCode(params: IRunCodeRequest): Promise<IRunCodeResponse> {
  return request.post('/code/run', params);
}
