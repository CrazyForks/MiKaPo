/* tslint:disable */
/* eslint-disable */
export class PoseSolver {
  free(): void;
  constructor();
  /**
   * @param {Array<any>} main_body
   * @param {Array<any>} left_hand
   * @param {Array<any>} right_hand
   * @returns {PoseSolverResult}
   */
  solve(main_body: Array<any>, left_hand: Array<any>, right_hand: Array<any>): PoseSolverResult;
}
export class PoseSolverResult {
  free(): void;
  left_foot: Rotation;
  left_hip: Rotation;
  left_lower_arm: Rotation;
  left_upper_arm: Rotation;
  left_wrist: Rotation;
  lower_body: Rotation;
  neck: Rotation;
  right_foot: Rotation;
  right_hip: Rotation;
  right_lower_arm: Rotation;
  right_upper_arm: Rotation;
  right_wrist: Rotation;
  upper_body: Rotation;
}
export class Rotation {
  free(): void;
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @param {number} w
   */
  constructor(x: number, y: number, z: number, w: number);
  static readonly default: Rotation;
  readonly w: number;
  readonly x: number;
  readonly y: number;
  readonly z: number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_rotation_free: (a: number, b: number) => void;
  readonly rotation_new: (a: number, b: number, c: number, d: number) => number;
  readonly rotation_default: () => number;
  readonly rotation_x: (a: number) => number;
  readonly rotation_y: (a: number) => number;
  readonly rotation_z: (a: number) => number;
  readonly rotation_w: (a: number) => number;
  readonly __wbg_posesolverresult_free: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_upper_body: (a: number) => number;
  readonly __wbg_set_posesolverresult_upper_body: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_lower_body: (a: number) => number;
  readonly __wbg_set_posesolverresult_lower_body: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_neck: (a: number) => number;
  readonly __wbg_set_posesolverresult_neck: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_left_hip: (a: number) => number;
  readonly __wbg_set_posesolverresult_left_hip: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_right_hip: (a: number) => number;
  readonly __wbg_set_posesolverresult_right_hip: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_left_foot: (a: number) => number;
  readonly __wbg_set_posesolverresult_left_foot: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_right_foot: (a: number) => number;
  readonly __wbg_set_posesolverresult_right_foot: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_left_upper_arm: (a: number) => number;
  readonly __wbg_set_posesolverresult_left_upper_arm: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_right_upper_arm: (a: number) => number;
  readonly __wbg_set_posesolverresult_right_upper_arm: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_left_lower_arm: (a: number) => number;
  readonly __wbg_set_posesolverresult_left_lower_arm: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_right_lower_arm: (a: number) => number;
  readonly __wbg_set_posesolverresult_right_lower_arm: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_left_wrist: (a: number) => number;
  readonly __wbg_set_posesolverresult_left_wrist: (a: number, b: number) => void;
  readonly __wbg_get_posesolverresult_right_wrist: (a: number) => number;
  readonly __wbg_set_posesolverresult_right_wrist: (a: number, b: number) => void;
  readonly __wbg_posesolver_free: (a: number, b: number) => void;
  readonly posesolver_new: () => number;
  readonly posesolver_solve: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
