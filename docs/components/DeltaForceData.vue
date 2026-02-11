<script setup lang="ts">
import { ref, computed } from 'vue'

interface DataItem {
  key: string
  desc: string
}

const rawData: DataItem[] = [
  { key: 'ActivityRow', desc: '活动描述' },
  { key: 'CommonItemAssets_Prop', desc: '物品的具体信息' },
  { key: 'CommonItemAssets_Vehicle', desc: '载具的具体信息' },
  { key: 'CommonItemAssets_Weapon', desc: '枪械的具体信息' },
  { key: 'FreeMandelBrick', desc: '图灵砖命名' },
  { key: 'GameItem', desc: '游戏全道具' },
  { key: 'GunPresetTable', desc: '枪械预设表' },
  { key: 'GunPreviewTable', desc: '枪械的默认配置使用配件表' },
  { key: 'HighLevelBackgroundData', desc: '砖皮背景位置' },
  { key: 'LOC_CommonItemAssets_Prop', desc: '全资产物品命名表' },
  { key: 'LOC_CommonItemAssets_Vehicle', desc: '全载具跟武器站以及皮肤命名表' },
  { key: 'LOC_CommonItemAssets_Weapon', desc: '全武器以及配件命名表' },
  { key: 'LOC_GameItem', desc: '游戏全物品命名' },
  { key: 'LOC_GameItemForHero', desc: '全角色相关物品（喷漆，名片，动作）' },
  { key: 'LOC_HeroArchive', desc: '角色档案' },
  { key: 'LOC_HeroBadgeData', desc: '勋章' },
  { key: 'LOC_HeroCardData', desc: '干员名片' },
  { key: 'LOC_HeroDFWatchData', desc: '手表描述' },
  { key: 'LOC_HeroExecutionData', desc: '处决描述' },
  { key: 'LOC_HeroFashionData', desc: '干员外观命名跟描述' },
  { key: 'LOC_HeroItemData', desc: '干员全皮肤道具' },
  { key: 'LOC_HeroLinesData', desc: '干员语音表' },
  { key: 'LOC_HeroProfile', desc: '干员简介' },
  { key: 'LOC_HeroSprayPaintData', desc: '干员喷漆命名表' },
  { key: 'LOC_MeleeWeaponSkinDataTable', desc: '近战武器皮肤表' },
  { key: 'LOC_Quest', desc: '各任务命名' },
  { key: 'LOC_SeasonQuest', desc: '赛季任务命名' },
  { key: 'LOC_SocialAvatarDataTable', desc: '军牌命名表' },
  { key: 'LOC_StoreHotRecommendation', desc: '商店捆绑包命名表' },
  { key: 'LOC_WeaponMeleeAttributeTable', desc: '近战武器数据表' },
  { key: 'LOC_WeaponSkinDataTable', desc: '武器皮肤命名' },
  { key: 'MeleeWeaponSkinDataTable', desc: '近战武器皮肤数据表' },
  { key: 'PartsDataTable', desc: '配件属性表' },
  { key: 'QuestObjectives', desc: '基础任务表' },
  { key: 'SafeBoxSkin', desc: '保险箱皮肤简介' },
  { key: 'SeasonQuestGroup', desc: '赛季任务分组' },
  { key: 'SeasonQuestStage', desc: '赛季任务阶段简介' },
  { key: 'SkinAppearanceId', desc: '武器外观配件使用表' },
  { key: 'StoreHotRecommendation', desc: '商店捆绑包推荐' },
  { key: 'ThemeBackgroundData', desc: '商店背景图具体存放位置' },
  { key: 'VehicleSkin', desc: '载具外观表' },
  { key: 'VehicleUnlock', desc: '载具详细描述' },
  { key: 'VoidPartsTable', desc: '虚空武器配件表' },
  { key: 'WeaponAppearanceTable', desc: '武器外观表' },
  { key: 'WeaponExtraModelTable', desc: '武器额外配件表' },
  { key: 'WeaponMainAudioTable', desc: '武器音效表' },
  { key: 'WeaponMeleeAppearanceTable', desc: '近战武器详细外观数据表' },
  { key: 'WeaponMeleeAttributeTable', desc: '近战武器详细属性数据表' },
  { key: 'WeaponMeleeComboDataTable', desc: '近战武器连击数据表' },
  { key: 'WeaponSkinAppearanceTable', desc: '武器外观表' },
  { key: 'WeaponSkinAppearanceTable_Ability', desc: '武器外观表皮属性表' },
  { key: 'WeaponSkinAppearanceTable_Vehicle', desc: '车辆皮肤外观表单' },
  { key: 'WeaponSkinDataTable', desc: '枪械皮肤数据表' },
]

const searchQuery = ref('')
const copied = ref<string | null>(null)

const filteredData = computed(() => {
  if (!searchQuery.value) return rawData
  const query = searchQuery.value.toLowerCase().trim()
  return rawData.filter(item => 
    item.key.toLowerCase().includes(query) || 
    item.desc.toLowerCase().includes(query)
  )
})

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = text
    setTimeout(() => {
      if (copied.value === text) {
        copied.value = null
      }
    }, 2000)
  } catch (err) {
    console.error('Failed to copy!', err)
  }
}
</script>

<template>
  <div class="delta-force-container">
    <div class="search-wrapper">
      <div class="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      </div>
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="搜索数据表..."
        class="search-input"
      />
    </div>

    <div class="data-grid">
      <div 
        v-for="item in filteredData" 
        :key="item.key" 
        class="data-card" 
        @click="copyToClipboard(item.key)"
        :class="{ 'is-copied': copied === item.key }"
      >
        <div class="card-content">
          <div class="card-header">
            <span class="key-tag" title="数据表名">{{ item.key }}</span>
            <div class="icon-state">
                <svg v-if="copied === item.key" class="icon-check" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <svg v-else class="icon-copy" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            </div>
          </div>
          <p class="description">{{ item.desc }}</p>
        </div>
        <div class="card-toast" :class="{ 'show': copied === item.key }">
            已复制
        </div>
      </div>
      
      <div v-if="filteredData.length === 0" class="no-results">
        <p>未找到相关结果 (No results found)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/**
 * Delta Force Data Component Styles
 * 适配新的 VitePress CSS 变量系统
 */

.delta-force-container {
  margin: 32px 0;
}

/* ===== 搜索框 ===== */
.search-wrapper {
  position: relative;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-3);
  pointer-events: none;
  opacity: 0.7;
}

.search-input {
  width: 100%;
  padding: 14px 16px 14px 48px;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg);
  box-shadow: 0 0 0 4px var(--vp-c-brand-soft);
  outline: none;
}

/* ===== 数据网格 ===== */
.data-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

/* ===== 数据卡片 ===== */
.data-card {
  position: relative;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 18px;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.data-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 102, 102, 0.12);
  background-color: var(--vp-c-bg);
  border-color: var(--vp-c-brand-2);
}

.dark .data-card:hover {
  box-shadow: 0 8px 24px rgba(255, 157, 150, 0.15);
}

.data-card.is-copied {
  transform: scale(0.98);
  border-color: #10b981;
  background-color: rgba(16, 185, 129, 0.08);
}

/* ===== 卡片内容 ===== */
.card-content {
  flex: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 10px;
}

.key-tag {
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  padding: 5px 10px;
  border-radius: 6px;
  word-break: break-all;
  line-height: 1.4;
  transition: all 0.2s;
}

.data-card:hover .key-tag {
  background-color: var(--vp-c-brand-2);
  color: #fff;
}

.data-card.is-copied .key-tag {
  background-color: #10b981;
  color: #fff;
}

.icon-state {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: var(--vp-c-text-3);
  transition: color 0.2s;
}

.data-card:hover .icon-state .icon-copy {
  color: var(--vp-c-brand-1);
}

.icon-check {
  color: #10b981;
  animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes popIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.description {
  font-family: inherit;
  font-size: 15px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
  transition: color 0.2s;
}

.data-card:hover .description {
  color: var(--vp-c-text-1);
}

/* ===== 复制成功提示 ===== */
.card-toast {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 600;
  color: #10b981;
  background: var(--vp-c-bg);
  padding: 4px 8px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  pointer-events: none;
}

.card-toast.show {
  opacity: 1;
  transform: translateY(0);
}

/* ===== 无结果提示 ===== */
.no-results {
  grid-column: 1 / -1;
  text-align: center;
  padding: 60px;
  color: var(--vp-c-text-3);
  font-size: 1.1em;
  font-family: inherit;
}

.no-results p {
  margin: 0;
}
</style>
