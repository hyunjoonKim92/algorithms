"use strict"

// 커맨드 패턴
function interface() {
  this.implements = function(obj) {
    let notImplementMethod = [];

    for (let method in this) {
      if (method !== "implements") {
        let proto = obj.__proto__;

        while(proto) {
          if (!Object.hasOwnProperty.call(proto, method)) {
              proto = proto.__proto__;

              if (proto === null) {
                notImplementMethod.push(method);
              }
          } else {
            break;
          }
        }
      }
    }

    if (notImplementMethod.length > 0) {
      throw new Error(obj.__proto__.constructor.name + "클래스의 " + notImplementMethod.join() + " 메소드가 구현되지 않았습니다.");
    }
  }
}

function Command() {
  if (this.constructor === Command) {
    throw new Error(this.constructor.name + " 인터페이스는 객체를 생성할 수 없습니다.");
  }

  return (function() {
      let method = {
        execute: function(){},
      };

      interface.call(method);

      return method;
  })();
}

function ACommand(param) {
  Command().implements(this);
  this.param = param;
}

ACommand.prototype.execute = function() {
  console.log("ACommand 가 " + this.param + " 을 처리");
}

function BCommand(receiver, param) {
  Command().implements(this);
  this.receiver = receiver;
  this.param = param;
}

BCommand.prototype.execute = function() {
  this.receiver.fn1(this.param);
}

function invoker() {
  this.command;
}

invoker.prototype.setCommand = function(command) {
  this.command = command;
}

invoker.prototype.executeCommand = function() {
  if (this.command) {
    this.command.execute();
  }
}

function Receiver() {
  Receiver.prototype.fn1 = function(param) {
    console.log("Receiver 가 " + param + " 을 처리");
  }
}

function Client() {
  Client.prototype.test = function() {
    let invoker = new invoker();
    const aCommand = new ACommand("Work1");

    invoker.setCommand(aCommand);
    invoker.executeCommand();

    console.log("------------------------");

    const receiver = new Receiver();
    const bCommand = new BCommand(receiver, "Work1");

    invoker.setCommand(bCommand);
    invoker.executeCommand();
  }

  new Client().test();
}