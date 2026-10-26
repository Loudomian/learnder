---
layout: page
title: 认识下文档贡献者
description: 认识 Learnder 文档的贡献者，了解他们的创作方向与联系方式。
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core } from './_data/team'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>认识下文档贡献者</template>
    <template #lead>
      来自五湖四海各行各业的作者们
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
</VPTeamPage>