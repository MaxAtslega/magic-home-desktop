import styled from 'styled-components'

const isWindows = window.clientInformation.platform === 'Win32'

export default styled.div`
  background: #ffffff;
  height: calc(100% - ${isWindows ? '34px' : '22px'});
  overflow-y: auto;
  padding: 10px 15px 15px 81px;
  color: #000000;
`
