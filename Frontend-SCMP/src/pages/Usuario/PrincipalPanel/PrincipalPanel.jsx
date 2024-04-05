import React, { useEffect, useState } from 'react'
import { Base } from '../../Base'
import { Stack, Typography, Box, Button } from '@mui/material'
import { Panel } from './Panel'
import { OSItem } from './OSItem'
import { useOS } from '../../../hooks/useOS'

export const PrincipalPanel = () => {
    const { listOs, getData, handleStart, handleEnd } = useOS()
    const [selectedTodo, setSelectedTodo] = useState([])


    useEffect(() => {
        getData()
    }, [])

    return (
        <Base title={"Panel Principal"}>
            <Stack flexDirection={'row'} height={'100%'} gap={2}>
                <Panel title={"TO DO"} color={"#DC382E"} button={
                    <Button
                        onClick={(e) => { handleStart(selectedTodo) }}
                        sx={{
                            alignSelf: 'flex-end'
                        }}
                        fullWidth
                        variant="contained"
                        color="primary">
                        INICIAR
                    </Button>
                }>

                    {
                        listOs.filter(e => e.estado == "todo").map((e) => (<OSItem checkeds={selectedTodo} setChecked={setSelectedTodo} id={e.cod_ord} text={e.descripcion} />))
                    }

                </Panel>

                <Panel title={"IN PROCESS"} color={"#F5E33E"} button={
                    <Button
                        onClick={(e) => { handleEnd(selectedTodo) }}
                        sx={{
                            alignSelf: 'flex-end'
                        }}
                        fullWidth
                        variant="contained"
                        color="primary">
                        FIN
                    </Button>
                }>
                    {
                        listOs.filter(e => e.estado == "inprocess").map((e) => (<OSItem id={e.cod_ord} text={e.descripcion} />))
                    }
                </Panel>

                <Panel title={"DONE"} color={"#28A863"} >
                    {
                        listOs.filter(e => e.estado == "done").map((e) => (<OSItem id={e.cod_ord} text={e.descripcion} />))
                    }
                </Panel>
            </Stack>
        </Base>
    )
}