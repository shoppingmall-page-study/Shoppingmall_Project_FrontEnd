import { Button, InputAdornment, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'

const CssReviewWriteTextField = styled(TextField)({
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
        }
      },
      '& .MuiInputLabel-root': {
        "&.Mui-focused": {
            color: '#343a40',
        }
    }
});

const CssDetailReviewWriteButton = styled(Button)({
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

const CssDetailTableCell = styled(TableCell)({
    textAlign: 'center',
    padding: '0rem',
    border: '1px solid black',
    width: '10rem',
    letterSpacing: '0.25rem'
})

const DetailReviewWrite = () => {
    return(
        <div style={{background: '#ffffff'}}> 
            <Table sx={{'&': { marginTop: '1rem'}}}>
                <TableBody>
                    <TableRow>
                        <CssDetailTableCell sx={{'&': {border: '1px solid black'}}}>리뷰이미지</CssDetailTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                            {/* <div className='Upload_Image_window'>
                                <img id='Upload_Image' src='https://upload.wikimedia.org/wikipedia/ko/c/cd/Doraemon.PNG' alt='도라에몽'/>
                            </div> */}
                            <CssReviewWriteTextField
                            size='small'
                            type='file'
                            variant='outlined'
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <CssDetailTableCell sx={{'&': {border: '1px solid black'}}}>제목</CssDetailTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                        <CssReviewWriteTextField
                        size='small'
                        fullWidth
                        label='제목'
                        variant='outlined'
                        multiline
                        rows={2}
                        />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <CssDetailTableCell sx={{'&': {border: '1px solid black'}}}>내용</CssDetailTableCell>
                        <TableCell sx={{'&': {border: '1px solid black'}}}>
                        <CssReviewWriteTextField
                        size='small'
                        variant='outlined'
                        fullWidth
                        label='내용'
                        multiline
                        rows={5}
                        />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell  sx={{'&': {border: 'none'}}}></TableCell>
                        <TableCell  className='Upload_Btn_Cell' sx={{'&': {textAlign: 'end', padding: '0', border: 'none'}}}>
                            <CssDetailReviewWriteButton>
                                        작성하기
                        </CssDetailReviewWriteButton>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default DetailReviewWrite