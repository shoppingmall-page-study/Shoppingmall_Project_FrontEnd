import { BorderRight } from '@mui/icons-material'
import { Button, InputAdornment, styled, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './User.css'

const CssUploadTableCell = styled(TableCell)({
    letterSpacing: '0.25rem',
    width: '5rem',
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    borderRight: '1px solid rgba(224, 224, 224, 1)'
})


const CssUserButton = styled(Button)({
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


const User = () => {
    const navigate = useNavigate()

    return(
        <div className='User_Window'>
            <Table sx={{width: '40rem'}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{'&': {padding: '0', border: 'none'}}}><h3 style={{margin: '1rem 0rem', fontSize: '1.17rem'}}>회원정보</h3></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <CssUploadTableCell>이름</CssUploadTableCell>
                        <TableCell sx={{borderTop: '1px solid rgba(224, 224, 224, 1)'}}>000</TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUploadTableCell>주소</CssUploadTableCell>
                        <TableCell>000000-0000-0000</TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUploadTableCell>닉네임</CssUploadTableCell>
                        <TableCell>킁킁</TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUploadTableCell>전화번호</CssUploadTableCell>
                        <TableCell>000-0000-0000</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{'&': {border: 'none'}}}></TableCell>
                        <TableCell sx={{'&': {display: 'flex', justifyContent: 'end', padding: '0' ,border: 'none'}}}><CssUserButton onClick={()=>navigate('modify')}>회원정보수정</CssUserButton></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
export default User