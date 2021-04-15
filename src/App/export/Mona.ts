import { Artifact } from '@/typings/Artifact'
const getStander = {
    setName: <Record<string, string[]>>{
        磐陀裂生之花: ['archaicPetra', 'flower'],
        嵯峨群峰之翼: ['archaicPetra', 'plume'],
        星罗圭壁之晷: ['archaicPetra', 'sands'],
        星罗圭璧之晷: ['archaicPetra', 'sands'],
        巉岩琢塑之樽: ['archaicPetra', 'goblet'],
        不动玄石之相: ['archaicPetra', 'circlet'],
        历经风雪的思念: ['blizzardStrayer', 'flower'],
        摧冰而行的执望: ['blizzardStrayer', 'plume'],
        冰雪故园的终期: ['blizzardStrayer', 'sands'],
        遍结寒霜的傲骨: ['blizzardStrayer', 'goblet'],
        破冰踏雪的回音: ['blizzardStrayer', 'circlet'],
        染血的铁之心: ['bloodstainedChivalry', 'flower'],
        染血的黑之羽: ['bloodstainedChivalry', 'plume'],
        骑士染血之时: ['bloodstainedChivalry', 'sands'],
        染血骑士之杯: ['bloodstainedChivalry', 'goblet'],
        染血的铁假面: ['bloodstainedChivalry', 'circlet'],
        魔女的炎之花: ['crimsonWitch', 'flower'],
        魔女常燃之羽: ['crimsonWitch', 'plume'],
        魔女破灭之时: ['crimsonWitch', 'sands'],
        魔女的心之火: ['crimsonWitch', 'goblet'],
        焦灼的魔女帽: ['crimsonWitch', 'circlet'],
        角斗士的留恋: ['gladiatorFinale', 'flower'],
        角斗士的归宿: ['gladiatorFinale', 'plume'],
        角斗士的希冀: ['gladiatorFinale', 'sands'],
        角斗士的酣醉: ['gladiatorFinale', 'goblet'],
        角斗士的凯旋: ['gladiatorFinale', 'circlet'],
        饰金胸花: ['heartOfDepth', 'flower'],
        追忆之风: ['heartOfDepth', 'plume'],
        坚铜罗盘: ['heartOfDepth', 'sands'],
        沉波之盏: ['heartOfDepth', 'goblet'],
        酒渍船帽: ['heartOfDepth', 'circlet'],
        渡火者的决绝: ['lavaWalker', 'flower'],
        渡火者的解脱: ['lavaWalker', 'plume'],
        渡火者的煎熬: ['lavaWalker', 'sands'],
        渡火者的醒悟: ['lavaWalker', 'goblet'],
        渡火者的智慧: ['lavaWalker', 'circlet'],
        远方的少女之心: ['maidenBeloved', 'flower'],
        少女飘摇的思念: ['maidenBeloved', 'plume'],
        少女苦短的良辰: ['maidenBeloved', 'sands'],
        少女片刻的闲暇: ['maidenBeloved', 'goblet'],
        少女易逝的芳颜: ['maidenBeloved', 'circlet'],
        宗室之花: ['noblesseOblige', 'flower'],
        宗室之翎: ['noblesseOblige', 'plume'],
        宗室时计: ['noblesseOblige', 'sands'],
        宗室银瓮: ['noblesseOblige', 'goblet'],
        宗室面具: ['noblesseOblige', 'circlet'],
        夏祭之花: ['retracingBolide', 'flower'],
        夏祭终末: ['retracingBolide', 'plume'],
        夏祭之刻: ['retracingBolide', 'sands'],
        夏祭水玉: ['retracingBolide', 'goblet'],
        夏祭之面: ['retracingBolide', 'circlet'],
        平雷之心: ['thunderSmoother', 'flower'],
        平雷之羽: ['thunderSmoother', 'plume'],
        平雷之刻: ['thunderSmoother', 'sands'],
        平雷之器: ['thunderSmoother', 'goblet'],
        平雷之冠: ['thunderSmoother', 'circlet'],
        雷鸟的怜悯: ['thunderingFury', 'flower'],
        雷灾的孑遗: ['thunderingFury', 'plume'],
        雷霆的时计: ['thunderingFury', 'sands'],
        降雷的凶兆: ['thunderingFury', 'goblet'],
        唤雷的头冠: ['thunderingFury', 'circlet'],
        野花记忆的绿野: ['viridescentVenerer', 'flower'],
        猎人青翠的箭羽: ['viridescentVenerer', 'plume'],
        翠绿猎人的笃定: ['viridescentVenerer', 'sands'],
        翠绿猎人的容器: ['viridescentVenerer', 'goblet'],
        翠绿的猎人之冠: ['viridescentVenerer', 'circlet'],
        乐团的晨光: ['wandererTroupe', 'flower'],
        琴师的箭羽: ['wandererTroupe', 'plume'],
        终幕的时计: ['wandererTroupe', 'sands'],
        吟游者之壶: ['wandererTroupe', 'goblet'],
        指挥的礼帽: ['wandererTroupe', 'circlet'],
        战狂的蔷薇: ['berserker', 'flower'],
        战狂的翎羽: ['berserker', 'plume'],
        战狂的时计: ['berserker', 'sands'],
        战狂的骨杯: ['berserker', 'goblet'],
        战狂的鬼面: ['berserker', 'circlet'],
        勇士的勋章: ['braveHeart', 'flower'],
        勇士的期许: ['braveHeart', 'plume'],
        勇士的坚毅: ['braveHeart', 'sands'],
        勇士的壮行: ['braveHeart', 'goblet'],
        勇士的冠冕: ['braveHeart', 'circlet'],
        守护之花: ['defenderWill', 'flower'],
        守护徽印: ['defenderWill', 'plume'],
        守护座钟: ['defenderWill', 'sands'],
        守护之皿: ['defenderWill', 'goblet'],
        守护束带: ['defenderWill', 'circlet'],
        流放者之花: ['exile', 'flower'],
        流放者之羽: ['exile', 'plume'],
        流放者怀表: ['exile', 'sands'],
        流放者之杯: ['exile', 'goblet'],
        流放者头冠: ['exile', 'circlet'],
        赌徒的胸花: ['gambler', 'flower'],
        赌徒的羽饰: ['gambler', 'plume'],
        赌徒的怀表: ['gambler', 'sands'],
        赌徒的骰盅: ['gambler', 'goblet'],
        赌徒的耳环: ['gambler', 'circlet'],
        教官的胸花: ['instructor', 'flower'],
        教官的羽饰: ['instructor', 'plume'],
        教官的怀表: ['instructor', 'sands'],
        教官的茶杯: ['instructor', 'goblet'],
        教官的帽子: ['instructor', 'circlet'],
        武人的红花: ['martialArtist', 'flower'],
        武人的羽饰: ['martialArtist', 'plume'],
        武人的水漏: ['martialArtist', 'sands'],
        武人的酒杯: ['martialArtist', 'goblet'],
        武人的头巾: ['martialArtist', 'circlet'],
        祭水礼冠: ['prayersForDestiny', 'circlet'],
        祭火礼冠: ['prayersForIllumination', 'circlet'],
        祭雷礼冠: ['prayersForWisdom', 'circlet'],
        祭冰礼冠: ['prayersToSpringtime', 'circlet'],
        故人之心: ['resolutionOfSojourner', 'flower'],
        归乡之羽: ['resolutionOfSojourner', 'plume'],
        逐光之石: ['resolutionOfSojourner', 'sands'],
        异国之盏: ['resolutionOfSojourner', 'goblet'],
        感别之冠: ['resolutionOfSojourner', 'circlet'],
        学士的书签: ['scholar', 'flower'],
        学士的羽笔: ['scholar', 'plume'],
        学士的时钟: ['scholar', 'sands'],
        学士的墨杯: ['scholar', 'goblet'],
        学士的镜片: ['scholar', 'circlet'],
        奇迹之花: ['tinyMiracle', 'flower'],
        奇迹之羽: ['tinyMiracle', 'plume'],
        奇迹之沙: ['tinyMiracle', 'sands'],
        奇迹之杯: ['tinyMiracle', 'goblet'],
        奇迹耳坠: ['tinyMiracle', 'circlet'],
        冒险家之花: ['adventurer', 'flower'],
        冒险家尾羽: ['adventurer', 'plume'],
        冒险家怀表: ['adventurer', 'sands'],
        冒险家金杯: ['adventurer', 'goblet'],
        冒险家头带: ['adventurer', 'circlet'],
        幸运儿绿花: ['luckyDog', 'flower'],
        幸运儿鹰羽: ['luckyDog', 'plume'],
        幸运儿沙漏: ['luckyDog', 'sands'],
        幸运儿之杯: ['luckyDog', 'goblet'],
        幸运儿银冠: ['luckyDog', 'circlet'],
        游医的银莲: ['travelingDoctor', 'flower'],
        游医的枭羽: ['travelingDoctor', 'plume'],
        游医的怀钟: ['travelingDoctor', 'sands'],
        游医的药壶: ['travelingDoctor', 'goblet'],
        游医的方巾: ['travelingDoctor', 'circlet'],
    },
    tag: <Record<string, string>>{
        暴击率: 'critical',
        暴击伤害: 'criticalDamage',
        固定攻击力: 'attackStatic',
        攻击力: 'attackPercentage',
        元素精通: 'elementalMastery',
        元素充能效率: 'recharge',
        固定生命值: 'lifeStatic',
        生命值: 'lifePercentage',
        固定防御力: 'defendStatic',
        防御力: 'defendPercentage',
        物理伤害加成: 'physicalBonus',
        治疗加成: 'cureEffect',
        岩元素伤害加成: 'rockBonus',
        风元素伤害加成: 'windBonus',
        冰元素伤害加成: 'iceBonus',
        水元素伤害加成: 'waterBonus',
        火元素伤害加成: 'fireBonus',
        雷元素伤害加成: 'thunderBonus',
    },
}

export function convertAsMona(artifacts: Artifact[]) {
    console.log(artifacts)
    const json = <Record<string, {}[]>>{
        flower: [],
        plume: [],
        sands: [],
        goblet: [],
        circlet: [],
    }
    for (let i = 0; i < artifacts.length; i++) {
        const sub = []
        for (let j = 0; j < artifacts[i].sub.length; j++) {
            sub.push({
                name:
                    artifacts[i].sub[j].value.includes('%') ||
                    (!artifacts[i].sub[j].name.includes('生命值') &&
                        !artifacts[i].sub[j].name.includes('防御力') &&
                        !artifacts[i].sub[j].name.includes('攻击力'))
                        ? getStander.tag[artifacts[i].sub[j].name]
                        : getStander.tag['固定' + artifacts[i].sub[j].name],
                value: artifacts[i].sub[j].value.includes('%')
                    ? parseFloat(artifacts[i].sub[j].value.replace('%', '')) * 0.01
                    : Number(artifacts[i].sub[j].value),
            })
        }
        try{
            const tmp = {
                setName: getStander.setName[artifacts[i].name][0],
                detailName: artifacts[i].name,
                position: getStander.setName[artifacts[i].name][1],
                mainTag: {
                    name:
                        artifacts[i].main.value.includes('%') ||
                        (!artifacts[i].main.name.includes('生命值') &&
                            !artifacts[i].main.name.includes('防御力') &&
                            !artifacts[i].main.name.includes('攻击力'))
                            ? getStander.tag[artifacts[i].main.name]
                            : getStander.tag['固定' + artifacts[i].main.name],
                    value: artifacts[i].main.value.includes('%')
                        ? parseFloat(artifacts[i].main.value.replace('%', '')) * 0.01
                        : Number(artifacts[i].main.value),
                },
                normalTags: sub,
                omit: false,
                level: artifacts[i].level,
                star: artifacts[i].stars,
                id: artifacts[i].id,
            }
            json[tmp.position].push(tmp)
        }
        catch(e){
            console.log(e)
        }
    }
    return JSON.stringify(json, null, 4)
}
