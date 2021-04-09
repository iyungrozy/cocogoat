// @ts-ignore
import { v4 as uuid } from 'uuid'
import { ipcRenderer } from 'electron'
import { IConfig } from '@/typings/config'
export function openArtifactView() {
    ipcRenderer.send('createArtifactView')
}

export async function getConfig(): Promise<IConfig> {
    const id = uuid()
    const p = new Promise((resolve) => {
        ipcRenderer.once(`getConfig-${id}`, (result, data) => resolve(data))
    })
    ipcRenderer.send('getConfig', { id })
    return <IConfig>await p
}
