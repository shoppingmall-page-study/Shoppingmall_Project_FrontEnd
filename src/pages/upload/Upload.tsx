import { Button, InputAdornment, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import './Upload.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { fontWeight, letterSpacing } from '@mui/system';

const CssUploadTextField = styled(TextField)({
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

const CssUploadButton = styled(Button)({
    color: '#000000',
    fontSize: '1rem',
    margin: '0rem',
    marginTop: '1rem',
    borderRadius: '0%',
    border: '1px solid #bcbfc6',
    background: '#fafbf6',
    '&:hover': {
        background: '#fafbf6'
    }
})

const CssUploadTableCell = styled(TableCell)({
    textAlign: 'center',
    padding: '0rem',
    border: '1px solid black',
    width: '10rem',
    letterSpacing: '0.25rem'
})

const Upload = () => {
    return(
        <div className="Upload_Window"> 
            <Table sx={{'&': {minWidth: '40rem', maxWidth: '68.75rem', margin: 'auto'}}}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{'&': {padding: '0rem', border: 'none'}}}><h3 style={{margin: '1rem 0rem', fontSize: '1.17rem'}}>상품등록</h3></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <CssUploadTableCell>상품이미지</CssUploadTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                            {/* <div className='Upload_Image_window'>
                                <img id='Upload_Image' src='https://upload.wikimedia.org/wikipedia/ko/c/cd/Doraemon.PNG' alt='도라에몽'/>
                            </div> */}
                            <CssUploadTextField
                            size='small'
                            type='file'
                            variant='outlined'
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUploadTableCell>상품명</CssUploadTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                        <CssUploadTextField
                        size='small'
                        label='상품명'
                        variant='outlined'
                        />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUploadTableCell>상품가격</CssUploadTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                        <CssUploadTextField
                        size='small'
                        variant='outlined'
                        type='text'
                        label='상품가격'
                        inputProps={{
                            inputMode: 'numeric',
                            pattern: `[0-9]`
                        }}
                        />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUploadTableCell>상품수량</CssUploadTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                        <CssUploadTextField
                        size='small'
                        type='text'
                        className='Upload_Count'
                        variant='outlined'
                        label='수량'
                        InputLabelProps={{
                            shrink: true
                        }}
                        inputProps={{
                            inputMode: 'numeric',
                            pattern: `[0-9]`
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <RemoveOutlinedIcon/>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <AddOutlinedIcon/>
                                </InputAdornment>
                            )
                        }}
                        />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <CssUploadTableCell>상품설명</CssUploadTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                        <CssUploadTextField
                        fullWidth
                        size='small'
                        variant='outlined'
                        multiline
                        rows={5}
                        label='상품설명'
                        />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell  sx={{'&': {border: 'none'}}}></TableCell>
                        <TableCell  className='Upload_Btn_Cell' sx={{'&': {textAlign: 'end', padding: '0', border: 'none'}}}>
                            <CssUploadButton>
                                        등록하기
                        </CssUploadButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default Upload