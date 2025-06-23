export function decorator1<T extends { new (...args: any[]): {} }>(constructor: T): T {
    return class extends constructor {
        constructor(...args: any[]) {
            args[0] = args[0] * 1.2;  // multiply price by 1.2
            super(...args);
        }
    };
}


export function decorator2(target: object, methodName: string, descriptor: PropertyDescriptor){}
export function decorator3(target: object, methodName: string, descriptor: PropertyDescriptor) {}
export function decorator4(target: object, methodName: string, descriptor: PropertyDescriptor) {}
export function decorator5<T extends { new (...args: any[]): {} }>(constructor: T): T {
    (constructor as any).MotelName = 'Monthly Motel';
    return constructor;
  }
  
