
/**
 * 保存token
 * @param {*} token string类型
 */
export function setToken(token) {
  window.localStorage.setItem('', token)
}
/**
 * 获取本地token
 * @returns 返回token
 */
export function getToken() {
  const token = window.localStorage.getItem('')
  if (token) {
    return token
  } else {
    return null
  }
}
/**
 * 移除token
 */
export function removeToken() {
  window.localStorage.removeItem('')
}
/**
 * 保存用户信息
 * @param {*} userInfo
 */
export function saveUserInfo(userInfo) {
  try {
    window.localStorage.setItem('', JSON.stringify(userInfo))
  } catch (error) {
    console.log('保存数据异常', error)
  }
}
/**
 *
 * @returns 获取本地保存的用户信息
 */
export function getUserInfo() {
  const userInfoStr = window.localStorage.getItem('')
  const userInfoObj = JSON.parse(userInfoStr)
  if (userInfoObj) {
    return userInfoObj
  } else {
    return null
  }
}
/**
 * 移除用户信息
 */
export function removeUserInfo() {
  window.localStorage.removeItem('')
}
// 清除登录信息
export function clearUserCache() {
  removeToken()
  removeUserInfo()
}

