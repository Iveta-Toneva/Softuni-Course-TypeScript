import { Motel } from "./contracts/motel";
import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { Room } from "./contracts/room";
import { SummerMonth, WinterMonth } from "./contracts/util";


type Month = WinterMonth | SummerMonth;

function isRoom(obj: unknown): obj is Room {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        'roomNumber' in obj &&
        typeof (obj as any).roomNumber === 'string' &&
        'totalPrice' in obj &&
        typeof (obj as any).totalPrice === 'number' &&
        'cancellationPrice' in obj &&
        typeof (obj as any).cancellationPrice === 'number'
    );
}


type roomNumbers = 'A01' | 'A02' | 'A03' | 'B01' | 'B02' | 'B03';

export class MonthlyMotel<T extends Month> extends PartialMonthlyMotel implements Motel {

    private rooms = new Map<roomNumbers, Room>();
    private bookings = new Map<roomNumbers, Set<T>>();

    totalBudget: number = 0;

    constructor() {
        super();
    }

    addRoom(room: unknown): string {
        if (!isRoom(room)) {
            return 'Value was not a Room.';
        }
        if (this.rooms.has(room.roomNumber)) {
            return `Room '${room.roomNumber}' already exists.`;
        }
        this.rooms.set(room.roomNumber, room);
        this.bookings.set(room.roomNumber, new Set<T>());
        return `Room '${room.roomNumber}' added.`;
    }

    bookRoom(roomNumber: roomNumbers, bookedMonth: T): string {
        if (!this.rooms.has(roomNumber)) {
            return `Room ${roomNumber} does not exist.`;
        }
        if (this.bookings.get(roomNumber)?.has(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'`;
        }
        const room = this.rooms.get(roomNumber)!;
        this.bookings.get(roomNumber)!.add(bookedMonth);
        this.totalBudget += room.totalPrice;
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }

    cancelBooking(roomNumber: roomNumbers, bookedMonth: T): string {
        if (!this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const booking = this.bookings.get(roomNumber);
        if (!booking?.has(bookedMonth)) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }
        const room = this.rooms.get(roomNumber)!;
        booking.delete(bookedMonth);
        this.totalBudget -= room.cancellationPrice;
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }

    getTotalBudget(): string {
        return `Motel: ${PartialMonthlyMotel.MotelName}
Total budget: $${this.totalBudget.toFixed(2)}`;
    }
}


