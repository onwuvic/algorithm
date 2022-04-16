const _ = require('lodash')
const moment = require('moment');

const formattedOrder = {
  '8983939393': {
    partnerId: '8983939393',
    orders: [
      {
        url: 'uue8389939392ddf',
        customerName: 'Jack Doe'
      },
      {
        url: 'udiidi929020229',
        customerName: 'Jane Doe'
      },
    ]
  },
}

const jk = [
  { 
    partnerId: '8983939393',
    orders: [
      {
        url: 'mdmdmmdd',
        customerName: 'emad'
      },
      {
        url: 'mdmdmmdd',
        customerName: 'emad'
      },
    ]
  }
]

function formatData(orders) {
    const newData = {}
    _.each(orders, (order) => {
      _.each(_.get(order, 'deliveryDetails'), (item) => {
        const partnerId = _.get(item, 'partnerId')
        const customerName = _.get(order.customer, 'name')
        const orderId = _.get(order, 'uid')
        if (!newData[partnerId]) {
          newData[partnerId] = {
            customers: [],
            orderIds: []
          }
          newData[partnerId]['customers'].push(customerName)
          newData[partnerId]['orderIds'].push(orderId)
        } else {
          const customers = newData[partnerId]['customers']
          const orderIds = newData[partnerId]['orderIds']
          if(!_.includes(customers, customerName)) customers.push(customerName)
          _.includes(customers, customerName) ? '' : customers.push(customerName)
          _.includes(orderIds, orderId) ? '' : orderIds.push(orderId)
        }
      })
    }) 

    return newData
}

function ft(orders) {

  const format = []

  _.each(orders, (order) => {

    _.each(_.filter(_.get(order, 'deliveryDetails'), (value) => 
      _.get(value, 'assignmentDate') &&
      _.get(value, 'progress') === 2
      ), 
    (item) => {

      const partnerId = _.get(item, 'partnerId')
      const customerName = _.get(order.customer, 'name')
      const orderId = _.get(order, 'uid')

      if (!_.some(format, ['partnerId', partnerId])) {
        const newObject = {
          partnerId,
          orders: [{
            url: orderId,
            customerName
          }]
        }
        format.push(newObject)     
      } else {
        const findObject = _.find(format, ['partnerId', partnerId])
        const newObject = {
          url: orderId,
          customerName
        }
        if (!_.some(_.get(findObject, 'orders'), newObject)) {
          findObject['orders'].push(newObject)
        }
      }
    })
  })

  return format
}

const orders = [
  {
    customer: {
      email: 'emad.alam@construyo.com',
      name: 'Emad Alam',
      phone: '0987654321',
      pipedriveCustomerId: '0019E00001PuR1VQAV',
      type: 'Privat',
    },
    deliveryDetails: [
      {
        assigned: true,
        completionDate: null,
        cos: 100,
        delivered: false,
        deliveryDate: null,
        done: false,
        dueDate: null,
        partnerId: '5I4zHoK8Q3TgXkMNN6Sj',
        progress: 2,
        id: '01t1t000001FtxKAAS',
      },
      {
        assigned: true,
        assignmentDate: moment()
          .subtract(3, 'days')
          .valueOf(),
        completionDate: 1614764588117,
        cos: 2000,
        delivered: true,
        deliveryDate: 1614764588873,
        done: true,
        dueDate: null,
        partnerId: '5I4zHoK8Q3TgXkMNN6Sj',
        progress: 2,
        id: '01t1t000001ii3zAAA',
      },
      {
        assigned: true,
        assignmentDate: moment()
          .subtract(3, 'days')
          .valueOf(),
        completionDate: 1614764588117,
        cos: 2000,
        delivered: true,
        deliveryDate: 1614764588873,
        done: true,
        dueDate: null,
        partnerId: '5I4zHoK8Q3TgXkMNN6Sj',
        progress: 2,
        id: '01t1t000001ii3zAAAB',
      },
      {
        assigned: true,
        assignmentDate: moment()
          .subtract(3, 'days')
          .valueOf(),
        completionDate: 1614764382457,
        conductedDate: 1614726000000,
        cos: 1000,
        delivered: true,
        deliveryDate: 1614764383623,
        done: true,
        dueDate: null,
        partnerId: '5I4zHoK8Q3TgXkMNN6Sj',
        progress: 3,
        id: '01t1t0000025njOAAQ',
      },
      {
        assigned: true,
        assignmentDate: moment()
          .subtract(3, 'days')
          .valueOf(),
        completionDate: null,
        cos: 500,
        delivered: false,
        deliveryDate: null,
        done: false,
        dueDate: null,
        partnerId: '1ekyoHsgGF3OSRAilV9f',
        progress: 2,
        id: '01t3W0000001FgJQAU',
      },
    ],
    partner: {
      email: null,
      name: null,
      partnerAssignedEmail: false,
      uid: null,
    },
    progress: 2,
    uid: '75q5BZgyLPHuxnaT3rwT',
    objectID: '75q5BZgyLPHuxnaT3rwT',
  },


  {
    deliveryDetails: [
      {
        assigned: true,
        assignmentDate: moment()
          .subtract(3, 'days')
          .valueOf(),
        completionDate: null,
        cos: 100,
        delivered: false,
        deliveryDate: null,
        done: false,
        dueDate: null,
        partnerId: '1ekyoHsgGF3OSRAilV9f',
        progress: 2,
        id: '01t1t000001FtxKAAS',
      },
    ],
    progress: 2,
    uid: 'Xk3S9Wrx4GFbmzkHkM1p',
    partner: {
      uid: null,
      name: null,
      partnerAssignedEmail: false,
      email: null,
    },
    customer: {
      pipedriveCustomerId: '0013W00000480GhQAI',
      email: 'bordas23@yahoo.com',
      name: 'Ghislain Simo',
      phone: '015253628921',
      type: 'Privat',
    },
    objectID: 'Xk3S9Wrx4GFbmzkHkM1p',
  },
  {
    customer: {
      type: 'Privat',
      phone: '017670640230',
      email: 'silvia.maier.1985@googlemail.com',
      name: 'Silvia Stegmaier',
      pipedriveCustomerId: '0013W00000483FIQAY',
    },
    progress: 2,
    partner: {
      uid: null,
      email: null,
      name: null,
      partnerAssignedEmail: false,
    },
    deliveryDetails: [
      {
        assigned: true,
        assignmentDate: moment()
          .subtract(3, 'days')
          .valueOf(),
        completionDate: null,
        cos: 100,
        delivered: false,
        deliveryDate: null,
        done: false,
        dueDate: null,
        partnerId: '0KZyWQxGsPPI4vLsIReW',
        progress: 2,
        id: '01t1t000001FtxKAAS',
      },
    ],
    uid: 'OkRgCHLYB3ucK4I2poCN',
    objectID: 'OkRgCHLYB3ucK4I2poCN',
  },
  {
    uid: 'BfF1BhulWpQlwuJtAgYR',
    customer: {
      email: 'emad.alam@construyo.com',
      name: 'Emad Alam',
      phone: '0987654321',
      pipedriveCustomerId: '0019E00001PuR1VQAV',
      type: 'Privat',
    },
    partner: {
      name: null,
      uid: null,
      partnerAssignedEmail: false,
      email: null,
    },
    progress: 2,
    deliveryDetails: [
      {
        assigned: true,
        assignmentDate: moment()
          .subtract(3, 'days')
          .valueOf(),
        completionDate: 1614764382457,
        conductedDate: 1614726000000,
        cos: 1000,
        delivered: true,
        deliveryDate: 1614764383623,
        done: true,
        dueDate: null,
        partnerId: '5I4zHoK8Q3TgXkMNN6Sj',
        progress: 2,
        id: '01t1t0000025njOAAQ',
      },
    ],
    objectID: 'BfF1BhulWpQlwuJtAgYR',
  },
]

// const format = _.groupBy(orders, (item) => {
//     console.log('------>item', item)
// })

// const format = ft(orders)
// const format = getFormattedDataForPartnerAssignmentEmail(orders)

// _.mapKeys(format, (value, key) => {
//   console.log('------key', key)
//   console.log('------value', value)
// })

// console.log('------output', format[0])

function getFormattedDataForPartnerAssignmentEmail(orders) {
  const y = _.chain(orders).flatMap(getFormattedDeliveryDetailsData)
  .groupBy('partnerId')
  .map((orders, partnerId) => ({orders, partnerId}))
  .value()

  // console.log('-----before', y)
  return y

  // const groupedData = []

  // _.each(orders, order => {
  //   _.each(
  //     // filter deliveryDetails by progress status (2) and assignment date (72hrs, 3 days)
  //     _.filter(
  //       _.get(order, 'deliveryDetails'),
  //       value =>
  //         _.get(value, 'assignmentDate') &&
  //         isEqualToNumberOfDay(
  //           _.get(value, 'assignmentDate'),
  //           3
  //         ) &&
  //         _.get(value, 'progress') === 2
  //     ),
  //     item => {
  //       const partnerId = _.get(item, 'partnerId')
  //       const customerName = _.get(order.customer, 'name')
  //       const orderId = _.get(order, 'uid')
  //       const orderUrl = `http://web/${orderId}`
  //       // check if the partnerId already exist in the groupedData array
  //       // the goal is to ensure partnerId is unique. i.e no Duplicate of partnerId
  //       if (!_.some(groupedData, ['partnerId', partnerId])) {
  //         if (customerName && orderId) {
  //           const newObject = {
  //             partnerId,
  //             orders: [
  //               {
  //                 url: orderUrl,
  //                 customerName,
  //               },
  //             ],
  //           }
  //           groupedData.push(newObject)
  //         }
  //       } else {
  //         // if the partnerId exist just add to the orders then
  //         const findPartner = _.find(groupedData, ['partnerId', partnerId])
  //         const newObject = {
  //           url: orderUrl,
  //           customerName,
  //         }

  //         // also, check if the exact object of url and customerName already exist
  //         // and if customerName and orderId are defined
  //         if (
  //           !_.some(_.get(findPartner, 'orders'), newObject) &&
  //           customerName &&
  //           orderId
  //         )
  //           findPartner['orders'].push(newObject)
  //       }
  //     }
  //   )
  // })

  // return groupedData
}

function isValidDeliveryDetails(deliveryDetails) {
  const progress = _.get(deliveryDetails, 'progress')
  const assignmentDate = _.get(deliveryDetails, 'assignmentDate')
  const partnerId = _.get(deliveryDetails, 'partnerId')

  return (
    partnerId &&
    assignmentDate &&
    progress === 2 &&
    isEqualToNumberOfDay(assignmentDate, 3)
  )
}

function getFormattedDeliveryDetailsData(order) {
  const orderId = _.get(order, 'uid')
  const orderTitle = _.get(order, 'title')
  const orderUrl = `http://web/${orderId}`
  const customerName = _.get(order.customer, 'name')
  const deliveryDetails = _.get(order, 'deliveryDetails')
  const validDeliveryDetails = _.filter(deliveryDetails, isValidDeliveryDetails)
  const formattedValidDeliveryDetails = _.uniqWith(_.map(
    validDeliveryDetails,
    details => ({
      partnerId: _.get(details, 'partnerId'),
      url: orderUrl,
      customerName,
      orderTitle,
    })
  ), _.isEqual)

  return formattedValidDeliveryDetails
}

const isEqualToNumberOfDay = (timestamp, numberOfDay) => {
  const momentTimestamp = moment(timestamp)
  if (!_.isInteger(numberOfDay) || !momentTimestamp.isValid()) return false
  const currentDate = moment().startOf('day')
  const diffInDays = moment
    .duration(currentDate.diff(momentTimestamp.startOf('day')))
    .asDays()
  return diffInDays === numberOfDay
}

const w = getFormattedDataForPartnerAssignmentEmail(orders)

// console.log('------- world', w[0])

// const name = 'ÜÖ -, ÖÜ , ÖÜ ÖÜ'
const name = 'Jünemann Schel'

// const name = []

const ke = (name) => {
  if (!_.isString(name) || !_.trim(name)) return ''
  // check if it is one word
  if (_.trim(name).indexOf(' ') === -1) {
    // pick the first and second letter
    return _.toUpper(`${name.charAt(0)}${name.charAt(1)}`)
  }

  const names = _.split(_.trim(name), ' ')
  return _.toUpper(`${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`)
}

// console.log('-----name', ke(name))

// const me = _.defaults({ 'a': 1, 'b': 2 }, undefined);

// console.log('-----name', me)

const r = {
  completed: false,
  projectId: "0UDHIhx1IX3oXarxssXo",
  questionsResponse: [],
  type: "familyHouse",
}

const j = [{
  completed: true,
  projectId: "0UDHIhx1IX3oXarxssXo",
  questionsResponse: [],
  type: "familyHouse",
},

{
  completed: false,
  projectId: "0UDHIhx1IX3oXarxssXo",
  questionsResponse: [],
  type: "familyHouse",
  },
  {
  completed: false,
  projectId: "0UDHIhx1IX3oXarxssXo",
  questionsResponse: [],
  type: "familyHouse",
}
]


// _.every(j, (we) => {
//   console.log(we.completed)
// })
const PROJECT_TYPE_DE_TO_EN_MAP = {
  'Anbau Hauserweiterung': 'familyHouse',
  'Neubau Einfamilienhaus': 'houseExtension',
  Durchbruch: 'breakthrough',
}

// console.log(_.keys(PROJECT_TYPE_DE_TO_EN_MAP))

const arr = [{ me: 'you' }, { them: 'weork' }]

let ner = {
  name: '',
  email: '',
}

const all = _.assign({}, ...arr)

// _.forEach([{ me: 'you' }, { me: 'weork' }], (item) => {
  
//   // ner = {...ner, item}
// })

// console.log(all)

const breakthrough = [
    {
        "uid": "Q7oieRDncGrC8AnTTIOX",
        "projectId": "fXy8WCNNrs3PSBTOzljH",
        "type": "breakthrough",
        "completed": false,
        "questionsResponse": [
            {
                "questionId": "1",
                "answer": "1",
                "answerType": "string"
            },
            {
                "questionId": "2",
                "answer": "2",
                "answerType": "string"
            },
            {
                "questionId": "3",
                "answer": "209",
                "answerType": "number"
            },
            {
                "questionId": "4",
                "answer": "69",
                "answerType": "number"
            },
            {
                "questionId": "5",
                "answer": "2",
                "answerType": "string"
            },
            {
                "questionId": "6",
                "answer": "1",
                "answerType": "string"
            },
            {
                "questionId": "7",
                "answer": "4",
                "answerType": "number"
            },
            {
                "questionId": "8",
                "answer": "",
                "answerType": "string"
            }
        ]
    },
    {
        "uid": "lNDpDrHBhTzwMxjHC44T",
        "projectId": "fXy8WCNNrs3PSBTOzljH",
        "type": "breakthrough",
        "completed": true,
        "questionsResponse": [
            {
                "questionId": "1",
                "answer": "1",
                "answerType": "string"
            },
            {
                "questionId": "2",
                "answer": "1",
                "answerType": "string"
            },
            {
                "questionId": "3",
                "answer": "440",
                "answerType": "number"
            },
            {
                "questionId": "4",
                "answer": "251",
                "answerType": "number"
            },
            {
                "questionId": "5",
                "answer": "1",
                "answerType": "string"
            },
            {
                "questionId": "6",
                "answer": "1",
                "answerType": "string"
            },
            {
                "questionId": "7",
                "answer": "2",
                "answerType": "number"
            },
            {
                "questionId": "8",
                "answer": "1",
                "answerType": "string"
            }
        ]
    }
]

const meta = {
    "uid": "Q1baGvEqDWETYhHjUCqB",
    "projectId": "fXy8WCNNrs3PSBTOzljH",
    "type": "breakthroughMeta",
    "completed": true,
    "questionsResponse": [
        {
            "questionId": "1",
            "answer": "1",
            "answerType": "string"
        }
    ]
}

const brea = [
  {
    1: 'Wall breach',
    2: 'No',
    3: '209',
    4: '69',
    5: 'Masonry',
    6: 'Wooden beam ceiling',
    7: '4',
    8: '',
  },
  {
    1: 'Wall breach',
    2: 'Yes',
    3: '440',
    4: '251',
    5: 'Reinforced concrete',
    6: 'Wooden beam ceiling',
    7: '2',
    8: 'Yes',
  },
]

  const com = _.reject(_.flatMap(_.map(_.concat(breakthrough, meta), (item) => _.get(item, 'questionsResponse'))), _.isUndefined)

// const key = _.map(brea, (item, index) => {
//   console.log(`---->${index}`,  item[index]);
// });

const out = [undefined, undefined]
const o = undefined
// 

const str = '1/make/this/a/string'

const splittedPath = _.split(str, '/')
const entity = _.get(splittedPath, '[2]')
const entityId = _.get(splittedPath, '[3]')

const hs = [{ uid: '789829292', collection: 'projects' }, { uid: '789829292ywuw', collection: 'orders' }, { collection: 'orders' }]

const keys = _.forEach(hs, (input) => {

    const existingDataUID = _.get(input, 'uid')
    if (existingDataUID) {
      return {
        uid: existingDataUID,
        collection: _.get(input, 'collection'),
      }
    }
  })


console.log('split', keys)
// console.log('entity', entity)
// console.log('entityId', entityId)




const _ = require('lodash')
const {
  getUserOpportunityCollectionPath,
  getUserProjectCollectionPath,
} = require('../utils')

/**
 * For a given crm opportunity id, the method syncs the
 * user's opportunity related information.
 *
 * - If no user exists, a new user is created
 * - If not user project exists for the given opportunity or opportunity's lead, a new project is created
 * - If project exists, the basic information is updated from the opportunity's data
 * - The opportunity details are synced
 *
 * @param {ServiceExecutionDependencies} deps Execution dependencies
 * @param {string} opportunityId CRM opportunity id
 * @returns {Promise<any>} Promise that resolves with the created/updated documents
 */
async function syncCRMUserOpportunity({services, log, db}, opportunityId) {
  const formattedOpportunity = await services.execute(
    'crm.queries.opportunityByIdFormatted',
    opportunityId
  )

  if (!formattedOpportunity) {
    log.info(
      {opportunityId},
      'skip sync crm user opportunity, opportunity not found'
    )
    return null
  }

  const userCreationInput = {
    email: _.get(formattedOpportunity, 'customer.email'),
    displayName: _.get(formattedOpportunity, 'customer.name'),
    phoneNumber: _.get(formattedOpportunity, 'customer.phone'),
  }
  const user = await services.execute(
    'users.mutations.createUser',
    userCreationInput,
    {
      noErrorIfExists: true,
    }
  )
  const userId = user.uid
  const opportunityUid = _.get(formattedOpportunity, 'uid')
  const leadUid = _.get(formattedOpportunity, 'leadId')

  const existingProject =
    (await services.execute('users.queries.dbProjectByOpportunityId', {
      userId,
      opportunityId: opportunityUid,
    })) ||
    (leadUid
      ? await services.execute('users.queries.dbProjectByLeadId', {
          userId,
          leadId: leadUid,
        })
      : null)
  const projectData = existingProject
    ? {
        uid: _.get(existingProject, 'uid'),
        userId,
        opportunityId: opportunityUid,
        name: _.get(
          formattedOpportunity,
          'customer.name',
          _.get(existingProject, 'name')
        ),
        type: _.get(
          formattedOpportunity,
          'label',
          _.get(existingProject, 'type')
        ),
        address: _.get(
          formattedOpportunity,
          'address',
          _.get(existingProject, 'address', null)
        ),
        timeline: _.get(
          formattedOpportunity,
          'plannedTime',
          _.get(existingProject, 'timeline', null)
        ),
      }
    : {
        userId,
        opportunityId: opportunityUid,
        name: _.get(formattedOpportunity, 'customer.name', null),
        type: _.get(formattedOpportunity, 'label', null),
        address: _.get(formattedOpportunity, 'address', null),
        timeline: _.get(formattedOpportunity, 'plannedTime', null),
      }
  // const documentsToCreate = [
  //   {
  //     collection: getUserProjectCollectionPath({db, userId}),
  //     data: projectData,
  //     options: {merge: true},
  //   },
  //   {
  //     collection: getUserOpportunityCollectionPath({db, userId}),
  //     data: _.defaults({userId}, formattedOpportunity),
  //     options: {merge: true},
  //   },
  // ]

  // const d =
  // console.log('--------------> d', formattedOpportunity)
  log.info({formattedOpportunity}, '------------ formattedOpportunity')
  // console.log('--------------> d', d)
  const documentsToCreate = {
    collection: getUserOpportunityCollectionPath({db, userId}),
    data: _.defaults({userId}, formattedOpportunity),
    options: {merge: true},
  }

  return /** @type {Promise<any>} */ (
    db.execute('mutations.createDocument', documentsToCreate)
  )
}

/**
 * @typedef {import('../types').UserProjectDBDocument} UserProjectDBDocument
 */

/**
 * @typedef {import('../types').UserOpportunityDBDocument} UserOpportunityDBDocument
 */

/**
 * @typedef {import('services/types').ServiceExecutionDependencies} ServiceExecutionDependencies
 */

module.exports = syncCRMUserOpportunity




