import styled from 'styled-components'
import media from './Media'
/**
 * A small list of stlyed compnents for making forms
 */

const FormGroup = styled.div`
  margin-bottom: 1rem;
`

const FormGroup2col = styled.div.attrs(props => ({
  col: props.col || '1',
  mobcol: props.mobcol || '1',
  gap: props.gap || '1rem',
}))`
  display: grid;
  grid-template-columns: 1fr;

  grid-gap: ${props => props.gap};
  margin-bottom: 1rem;

  @media ${media.tablet} {
    grid-template-columns: repeat(${props => props.col}, 1fr);
  }
`

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

const Optional = styled.span`
  font-size: 0.8rem;
`

const Select = styled.select`
  display: block;
`

const StyledRadio = styled.div`
  .inputGroup {
    background-color: ${props => props.theme.lightGrey};
    display: block;
    margin: 10px 0;
    position: relative;

    label {
      padding: 12px 65px 12px 28px;
      width: 100%;
      display: block;
      text-align: left;
      color: ${props => props.theme.secondaryColor};
      cursor: pointer;
      position: relative;
      z-index: 2;
      transition: color 200ms ease-in;
      overflow: hidden;
      font-weight: bold;
      &:hover {
        background: ${props => props.theme.lightBlue};
      }

      span {
        font-weight: normal;
      }

      &:before {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        content: '';
        background-color: ${props => props.theme.secondaryColor};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        z-index: -1;
      }

      &:after {
        width: 32px;
        height: 32px;
        content: '';
        border: 2px solid #d1d7dc;
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
        background-repeat: no-repeat;
        background-position: 2px 3px;
        border-radius: 50%;
        z-index: 2;
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: all 200ms ease-in;
      }
    }

    input:checked ~ label {
      color: #fff;

      &:before {
        transform: translate(-50%, -50%) scale3d(56, 56, 1);
        opacity: 1;
      }

      &:after {
        background-color: #54e0c7;
        border-color: #54e0c7;
      }
    }

    input {
      width: 32px;
      height: 32px;
      order: 1;
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      visibility: hidden;
    }
  }
`

export {
  FormGroup,
  FormLabel,
  Input,
  TextArea,
  Optional,
  FormGroup2col,
  Select,
  StyledRadio,
}
