import React, { useEffect, useState } from 'react'
import { Base } from '../../Base'
import { Stack, Typography, Box, Button } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabOS } from './TabOS';
import { useOS } from '../../../hooks/useOS';

export const WorkPanel = () => {
    const [value, setValue] = useState(0);
    const { listOs, getData, getListMotivos, motivos } = useOS()
    const listInprocess = listOs.filter(e => e.estado == "inprocess")

    useEffect(() => {
        getData()
        getListMotivos()
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Base title={"Panel de trabajo"}>
            <Stack height={'100%'} gap={3}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        listInprocess.map(e => (
                            <Tab label={e.descripcion} />))
                    }
                </Tabs>

                {listInprocess.length != 0 && <TabOS motivos={motivos} />}

            </Stack>
        </Base>
    )
}
