const _ = require('lodash')
const { pathToRegexp, match, parse, compile } = require("path-to-regexp");
const UrlPattern = require('url-pattern');
// const PropTypes = {
//     string() {
//         return new Error('It should be a string')
//     }
// }

// function message({ subject, title }) {
//     return `${subject} of the ${title}`
// }

// message.propTypes = {
//     subject: PropTypes.string
// }

// console.log(message.propTypes)


// const {db, auth} = require('~/test-helpers/')
// const glob = require("glob")
// const pattern = 'users/{userId}/projects/{projectId}/loads/{loadId}/{timestamp}/{fileName}'
// const path = 'users/93939093/projects/93300848/loads/w9999233/1233444/gilr.png'

// const out = glob('a{/b/c,bcd}', {
//   root: path
// }, (err, files) => { 
//   console.log(files)
// })

// function h(pattern, path) {
//   const parts = _.split(path, '/')
//   const variables = _.split(pattern, '/')

//   let i = {

//   }

//   _.forEach(variables, (variable, index) => {
//     if (_.startsWith(variable, '{')) {
//       i[variable.replace('{', '').replace('}', '')] = parts[index]
//     }
//   })

//   return i

//   // return {
//   //   userId: 93939093,
//   //   projectId: 93300848,
//   //   loadId: 'w9999233',
//   //   timestamp: '1233444',
//   //   fileName: 'gilr.png'
//   // }
//   /**
//    * 
//    * 
//    * */ 
// }
//  variables.push(part.replace('{', '').replace('}', ''))
// const j = pattern.split(/\{[^}]+\}/)
// const q = j.filter(part => part.startsWith('{') && part.endsWith('}'))

// const k = h(pattern, path)

// console.log('--->', k);

// const docs = ['bdbd', 'jdjdjd']
// const docs2 = [...docs]

// console.log(docs2, docs);

let path = "users/{userId}/projects/{projectId}/loads/{loadId}/{timestamp}/{fileName}";
// const paramsPattern = /[^{\}]+(?=})/g;
// let extractParams = path.match(paramsPattern);
// console.log("extractParams", extractParams)

// const regexp = pathToRegexp("users/{userId}/projects/{projectId}/loads/{loadId}/{timestamp}/{fileName}");

// /^users\/(?:userId)\/projects\/(?:projectId)\/loads\/(?:loadId)\/(?:timestamp)\/(?:fileName)[\/#\?]?$/i

// console.log(regexp.exec('users/93939093/projects/93300848/loads/w9999233/1233444/gilr.png'));

// var pattern = new UrlPattern('users/{userId}/projects/{projectId}/loads/{loadId}/{timestamp}/{fileName}');
// var pattern = new UrlPattern('/users/:userId/projects/:projectId/loads/:loadId/:timestamp/:fileName'); 

// Schönborn Müller 😀😂

var options = {
  // segmentValueCharset: '/[\p{L}-]+/ug',
}

var pattern = new UrlPattern('users/:userId/projects/:projectId/leads/:leadId/:timestamp/:fileName(*)', options);

const hj = 'users/93939093/projects/93300848/loads/w9999233/1233444/gilr.png'
const sourcePath = _.chain('users/93939093/projects/93300848/loads/w9999233/1233444/gilr.png')
    .split('/')
  .last().value()
const fileName = 'users/93939093/projects/93300848/loads/w9999233/1233444/gilr.png'.split('/').pop()

const toBase64 = (plainCredential) =>
  Buffer.from(plainCredential).toString('base64')

// console.log('--->hj', _.chain(hj).split('/').slice(0, -1).join('/').value());
// console.log('--->sourpath', toBase64('api-beam-staging@construyo.de:876W^Sg@_:D}hvNR'));

// _.join(_.slice(_.split(hj, '/'), 0, -1), '/')

// console.log('ppppp', pattern.match('users/93939093/projects/93300848/opportunities/w9999233/1233444/fish.png'));

const triggers = [
  {
    path: 'users/:userId/projects/:projectId/leads/:id/:timestamp/:fileName.*',
    name: 'users-onUploadUserProjectDocument',
    fnPath: 'users.triggers.onUploadUserProjectDocument',
    eventType: 'finalize',
  },
  {
    path: 'users/:userId/projects/:projectId/opportunities/:id/:timestamp/:fileName.*',
    name: 'users-onUploadUserProjectDocument',
    fnPath: 'users.triggers.onUploadUserProjectDocument',
    eventType: 'finalize',
  },]

const object = {
  name: 'users/93939093/projects/93300848/leads/w9999233/1233444/gilr.png'
}

const context = {
  eventType: 'google.storage.bucket.finalize',
  params: {}
}

const throwError = false
const updateOtp = false
const existing = true

function getParams() {
  if (existing) {
      if (throwError) {
      throw new Error('Error')
    }

    if (updateOtp) { 
      return 'Updated OTP'
    }

    return 'Updated User'
  }
  
}

console.log(getParams())

// function k(trigger, fileName) {
//   const pattern = new UrlPattern(_.get(trigger, 'path'))
//   return pattern.match(fileName)
// }

// function getTriggerConfig(triggers, object, context) {
//   // const eventTypePath = _.get(context, 'eventType')
//   const fileName = _.get(object, 'name')
//   // const eventType = _.last(_.split(eventTypePath, '.'))
//   //   const pathConfigs = _.filter(
//   //     triggers,
//   //     ({targetEntity, eventType: type}) =>
//   //       _.includes(paths, targetEntity) && eventType === type
//   //   )
//   const pathConfigs = _.map(_.filter(triggers, (trigger) => k(trigger, fileName)), (value) => ({...value, context: {...context, params: k(value, fileName)}}))
//   return pathConfigs[0].context.params
// }

// const h = getTriggerConfig(triggers, object, context)
// console.log('--->', h)

// console.log('--->', _.defaults({a: '2'}, {...{b: '5', c: '6'}, b: '3'}));
const state = {state: {redirect: {pathname: 'PAGE_PATHS.PROJECTS'}}}
function getRedirect({ state }) {
  const userInfo = {
    name: 'John Doe',
  }
  console.log('--->', _.defaults({}, userInfo, state), _.get(state, 'state'));
}
// getRedirect({ state })

const data = {
  name: 'John doe',
  email: 'jonh@g.com'
}

const userName = _.get(data, 'name') || 'Mayer Doe'
const userEmail = _.get(data, 'email') || 'mayer@gmail.com'
// console.log('--->', userName, userEmail)
// console.log('--->', _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 }));

function me(name) {
  switch (name) {
    case 'john':
    case 'jack':
    case 'Jake':
      return 'Male'
    case 'Jane':
    case 'Janie':
      return 'Female'
    default:
      return 'Not Human'
  }
}

// console.log(me('Janie'))
const rep = true
const ot = false
const k = {
  show: !!rep && !ot
}

function Message({ subject, greeting }) {
  return `${greeting}, ${subject}`
}

Message.propTypes = {
  subject(props, propName, componentName) {
      console.log({props, propName, componentName})
      // if (!props[propName]) {
      //     return new Error(`${propName} is required in ${componentName}`)
      // }
  },
}

// console.log(Message({ subject: 'There lord', greeting: 'Hello' }))

// console.log('--->', Message.propTypes.subject({ subject: 'There lord', greeting: 'Hello' }))
const products = [{
  name: 'Product 1',
  price: 100,
  quantity: 2,
  discount: 0.1,
}, {
  name: 'Product 2',
  price: 200,
  quantity: 3,
  discount: 0.2,
  }, {
  name: 'Product 3',
  price: 300,
  quantity: 4,
  discount: 0.3,
  }, {
  name: 'Product 4',
  price: 400,
    
  quantity: 5,
  discount: 0.4,
  }]

  var usersData = [
    {firstName: "tommy", lastName: "MalCom", email: "test@test.com", id: 102},
    {firstName: "Peter", lastName: "breCht", email: "test2@test2.com", id: 103},
    {firstName: "RoHan", lastName: "sahu", email: "test3@test3.com", id: 104}
  ];

  var userController = {

    currentUser: "",

    findUser: function(userEmail) {
        var arrayLength = usersData.length,
            i;
        for (i = arrayLength - 1; i >= 0; i--) {
            if (usersData[i].email === userEmail) {
                this.currentUser = usersData[i];
                break;
            }
        }
        return this;
    },

    formatName: function() {
        if (this.currentUser) {
            this.currentUser.fullName = titleCaseName(this.currentUser.firstName) + " " + titleCaseName(this.currentUser.lastName);
        }
        return this;

    },

    createLayout: function() {
        if (this.currentUser) {
          this.currentUser.viewData = "Member: " + this.currentUser.fullName + " " + "ID: " + this.currentUser.id + " " + "Email: " + this.currentUser.email + " ";
        }
        return this;
    },

    displayUser: function() {
        if (!this.currentUser) return;

        $(".members-wrapper").append(this.currentUser.viewData);

    }
  };

const ju = {
    name: 'victor'
}
  
const mo = {
  email: 'vico@gmail.com'
}

function me() {
  console.log('yah')
}

  console.log('--->', _.defaults({}, ju, mo, me))