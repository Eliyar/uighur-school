import {
    CameraOutlined,
    ExpandMore,
    InfoOutlined,
    PersonAddOutlined,
} from '@mui/icons-material'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Box,
    Stack,
    Typography,
} from '@mui/material'

import { useClasses } from '../../hooks/useClasses'
import { Button } from '../common/Button'

export const List = () => {
    const { classes } = useClasses()

    if (!classes?.length) {
        return (
            <Alert color="warning" icon={<InfoOutlined />}>
                No classes exist
            </Alert>
        )
    }

    return (
        <>
            {classes.map((classObj) => (
                <Accordion key={classObj.id} elevation={0}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            spacing={1}
                            sx={{ width: '100%', mr: 3 }}
                        >
                            <Typography variant="body2" fontWeight={500}>
                                {classObj.name}
                            </Typography>

                            <Stack direction="row" spacing={1}>
                                <Button
                                    variant="outlined"
                                    label="Add Student"
                                    startIcon={<PersonAddOutlined />}
                                    onClick={(event) => {
                                        event.stopPropagation()
                                    }}
                                />
                                <Button
                                    variant="outlined"
                                    label="Wheels"
                                    startIcon={<CameraOutlined />}
                                    onClick={(event) => {
                                        event.stopPropagation()
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Stack>
                            <Box>Students</Box>
                        </Stack>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    )
}
