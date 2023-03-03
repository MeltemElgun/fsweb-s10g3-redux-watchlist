//  actions
export const REMOVE_FAV = "kaldir";
export const ADD_FAV = "ekle";

export function kaldir(id) {
  return { type: REMOVE_FAV, payload: id };
}
export function ekle() {
  return { type: ADD_FAV };
}
