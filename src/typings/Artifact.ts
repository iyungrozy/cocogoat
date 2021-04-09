/**
 * 圣遗物数据结构。
 * 为了保证通用性，我们全部存储最原始的数据。
 */
/**
 * 圣遗物词条
 */
export interface ArtifactParam {
    /**
     * 名称
     */
    name: string
    /**
     * 属性
     */
    value: string
}
/**
 * 圣遗物数据结构
 */
export interface Artifact {
    /**
     * ID
     */
    id: number
    /**
     * 名称
     */
    name: string
    /**
     * 星数
     */
    stars: number
    /**
     * 等级
     */
    level: number
    /**
     * 使用者
     */
    user: string
    /**
     * 主词条
     */
    main: ArtifactParam
    /**
     * 副词条
     */
    sub: ArtifactParam[]
}
