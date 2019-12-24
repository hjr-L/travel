export default {
  changeCity (state, name) {
    state.city = name
    try {
      localStorage.city = name
    } catch (e) {}
  }
}
