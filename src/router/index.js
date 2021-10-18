import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

import TermMds from '@/views/TermMds'
import TermOms from '@/views/TermOms'
import Terminology from '@/views/Terminology'
import LotBatchManagement from '@/views/LotBatchManagement'
import Bank from '@/views/Bank'
import Bay from '@/views/Bay'
import LotStart from '@/views/LotStart'
import Equipment from '@/views/Equipment'
import DMSEquipment from '@/views/DMSEquipment'
import EquipmentBoard from '@/views/EquipmentBoard'
import Durable from '@/views/Durable'
import LotList from '@/views/LotList'
import Constraint from '@/views/Constraint'
import ProcessHoldList from '@/views/ProcessHoldList'
import ProcessHoldRegistration from '@/views/ProcessHoldRegistration'







Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        { path: 'termMds', name: 'termMds', component: TermMds },
        { path: 'termOms', name: 'termOms', component: TermOms },
        { path: 'terminology', name: 'terminology', component: Terminology },
        { path: 'lotBatchManagement', name: 'lotBatchManagement', component: LotBatchManagement },
        { path: 'bank', name: 'bank', component: Bank },
        { path: 'bay', name: 'bay', component: Bay },
        { path: 'lotStart', name: 'lotStart', component: LotStart },
        { path: 'equipment', name: 'equipment', component: Equipment },
        { path: 'dmsEquipment', name: 'dmsEquipment', component: DMSEquipment },
        { path: 'equipmentBoard', name: 'equipmentBoard', component: EquipmentBoard },
        { path: 'durable', name: 'durable', component: Durable },
        { path: 'lotList', name: 'lotList', component: LotList },
        { path: 'constraint', name: 'constraint', component: Constraint },
        { path: 'processHoldList', name: 'processHoldList', component: ProcessHoldList },
        { path: 'processHoldRegistration', name: 'processHoldRegistration', component: ProcessHoldRegistration }
      ]
    }
  ]
})