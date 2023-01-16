import { Button, InputAdornment, styled, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { useRef } from 'react';
import Postcode from '../../lib/post/PostCode';
import './UserModify.css'

const CssUserModifyTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": { //TextField를 가리키는 클래스명
        "& fieldset": { //기본화면에서 TextField 설정
          border: '1px solid black', //테두리를 black으로
          borderRadius: '0%',
        },
      //   "&:hover fieldset": { //마우스를 올렸을 때 설정 현재는 필요 없으므로 주석처리
      //     borderColor: "black"
      //   },
        "&.Mui-focused fieldset": { //마우스로 TextField를 클릭했을 때 설정
          border: '1px solid black'
        },
        "& .MuiOutlinedInput-notchedOutline":{
          "& fieldset":{
              border: '1px solid black'
          }
        },
        "& .MuiOutlinedInput-input": {
        }
      },
      '& .MuiInputLabel-root': {
        "&.Mui-focused": {
            color: '#343a40',
        }
    }
});

const CssUserModifyButton = styled(Button)({
    color: '#000000',
    fontSize: '1rem',
    marginLeft: '1rem',
    marginTop: '1rem',
    borderRadius: '0%',
    border: '1px solid #bcbfc6',
    background: '#fafbf6',
    '&:hover': {
        background: '#fafbf6'
    }
})

const CssUserModifyTableCell = styled(TableCell)({
    textAlign: 'center',
    padding: '0rem',
    border: '1px solid black',
    width: '10rem',
    letterSpacing: '0.25rem'
})

const CssRegisterPostcodeBtn = styled(Button)({
    fontSize: '0.875rem',
    fontWeight: 'bold',
    background: '#fafbf6',
    borderRadius: '0%',
    border: '1px solid #343a40',
    marginLeft: '0.5rem',
    color: '#343a40',
    '&:hover': {
        background: '#fafbf6'
    }
})

const CssUserModifyAddrTextField = styled(CssUserModifyTextField)({
    marginRight: '0.5rem',
})

const CssUserModifyDetailAddrTextField = styled(CssUserModifyTextField)({
    marginLeft: '0.5rem',
})

const UserModify = () => {
    const postcodeRef = useRef<HTMLInputElement | null>(null)
    const addrRef = useRef<HTMLInputElement | null>(null)
    return(
        <div className='UserModify_Window'>
            <div className='UserModify_Table'>
            <Table sx={{'&': {width: '68.75rem', margin: 'auto'}}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{'&': {padding: '0rem', border: 'none'}}}><h3 style={{margin: '1rem 0rem', fontSize: '1.17rem'}}>회원정보수정</h3></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <CssUserModifyTableCell>이름</CssUserModifyTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                            <CssUserModifyTextField
                            size='small'
                            variant='outlined'
                            label="이름"
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUserModifyTableCell>주소</CssUserModifyTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                            <div className='UserModify_Postcode'>
                                <CssUserModifyTextField
                                size='small'
                                label='우편번호'
                                type='text'
                                inputRef={postcodeRef}
                                variant='outlined'
                                InputLabelProps={{
                                    shrink: true
                                }}
                                inputProps={{
                                    inputMode: 'numeric',
                                    pattern: `[0-9]`
                                }}
                                />
                                <CssRegisterPostcodeBtn
                                onClick={() => Postcode(postcodeRef.current!, addrRef.current!)}>
                                    우편주소찾기
                                </CssRegisterPostcodeBtn>
                            </div>
                            <div className='UserModify_Addr'>
                                <CssUserModifyAddrTextField
                                size='small'
                                label='주소'
                                inputRef={addrRef}
                                variant='outlined'
                                InputLabelProps={{
                                    shrink: true
                                }}
                                />
                                <CssUserModifyDetailAddrTextField
                                size='small'
                                label='상세주소'
                                variant='outlined'
                                />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUserModifyTableCell>닉네임</CssUserModifyTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                        <CssUserModifyTextField
                        size='small'
                        variant='outlined'
                        label='닉네임'
                        />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUserModifyTableCell>전화번호</CssUserModifyTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                        <CssUserModifyTextField
                        size='small'
                        type='text'
                        variant='outlined'
                        label='전화번호'
                        inputProps={{
                            inputMode: 'numeric',
                            pattern: `[0-9]`
                        }}
                        />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell  sx={{'&': {border: 'none'}}}></TableCell>
                        <TableCell  className='Upload_Btn_Cell' sx={{'&': {textAlign: 'end', padding: '0', border: 'none'}}}>
                            <CssUserModifyButton>
                                        돌아가기
                            </CssUserModifyButton>
                            <CssUserModifyButton>
                                        등록하기
                            </CssUserModifyButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </div>
        </div>
    )
}
export default UserModify