"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMotel = void 0;
const partialMonthlyMotel_1 = require("./contracts/partialMonthlyMotel");
function isRoom(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        'roomNumber' in obj &&
        typeof obj.roomNumber === 'string' &&
        'totalPrice' in obj &&
        typeof obj.totalPrice === 'number' &&
        'cancellationPrice' in obj &&
        typeof obj.cancellationPrice === 'number');
}
class MonthlyMotel extends partialMonthlyMotel_1.PartialMonthlyMotel {
    rooms = new Map();
    bookings = new Map();
    totalBudget = 0;
    constructor() {
        super();
    }
    addRoom(room) {
        if (!isRoom(room)) {
            return 'Value was not a Room.';
        }
        if (this.rooms.has(room.roomNumber)) {
            return `Room '${room.roomNumber}' already exists.`;
        }
        this.rooms.set(room.roomNumber, room);
        this.bookings.set(room.roomNumber, new Set());
        return `Room '${room.roomNumber}' added.`;
    }
    bookRoom(roomNumber, bookedMonth) {
        if (!this.rooms.has(roomNumber)) {
            return `Room ${roomNumber} does not exist.`;
        }
        if (this.bookings.get(roomNumber)?.has(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'`;
        }
        const room = this.rooms.get(roomNumber);
        this.bookings.get(roomNumber).add(bookedMonth);
        this.totalBudget += room.totalPrice;
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }
    cancelBooking(roomNumber, bookedMonth) {
        if (!this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const booking = this.bookings.get(roomNumber);
        if (!booking?.has(bookedMonth)) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }
        const room = this.rooms.get(roomNumber);
        booking.delete(bookedMonth);
        this.totalBudget -= room.cancellationPrice;
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }
    getTotalBudget() {
        return `Motel: ${partialMonthlyMotel_1.PartialMonthlyMotel.MotelName}
Total budget: $${this.totalBudget.toFixed(2)}`;
    }
}
exports.MonthlyMotel = MonthlyMotel;
//# sourceMappingURL=monthlyMotel.js.map