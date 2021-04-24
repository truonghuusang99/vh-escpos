import { Injectable } from '@angular/core';
import { EscBuilder } from './encode/EscBuilder';
import * as i0 from "@angular/core";
export class VhEscposService {
    constructor() { }
    /**
     * Initialize a new print queue
     */
    init() {
        this.builder = new EscBuilder();
        this.builder.init();
        return this;
    }
    /**
     *
     * @param cutType full|partial
     */
    cut(cutType = 'full') {
        this.builder.cut(cutType);
        return this;
    }
    /**
     *
     * @param lineCount How many lines to feed
     */
    feed(lineCount = 1) {
        this.builder.feed(lineCount);
        return this;
    }
    setInverse(value = true) {
        this.builder.setInverse(value);
        return this;
    }
    setBold(value = true) {
        this.builder.setBold(value);
        return this;
    }
    setUnderline(value = true) {
        this.builder.setUnderline(value);
        return this;
    }
    /**
     *
     * @param value left|center\right
     */
    setJustification(value = 'left') {
        this.builder.setJustification(value);
        return this;
    }
    /**
     *
     * @param value normal|large
     */
    setSize(value = 'normal') {
        this.builder.setSize(value);
        return this;
    }
    /**
     *
     * @param text
     */
    writeLine(text = '') {
        this.builder.writeLine(text);
        return this;
    }
    /**
     *
     *
     */
    drawLine() {
        this.builder.drawLine();
        return this;
    }
    /**
     *
     * @param data
     */
    writeTable(data) {
        this.builder.writeTable(data);
        return this;
    }
    /**
     *
     * @param size
     */
    setPageSize(size = 48) {
        this.builder.setPageSize(size);
        return this;
    }
    writeCustomTable(data, options = {}) {
        this.builder.writeCustomTable(data, options);
        return this;
    }
    image(image) {
        this.builder.raster(image);
        return this;
    }
    /**
     * write the current builder value to the driver and clear out the builder
     */
    flush() {
        return this.builder.flush();
    }
}
VhEscposService.ɵprov = i0.ɵɵdefineInjectable({ factory: function VhEscposService_Factory() { return new VhEscposService(); }, token: VhEscposService, providedIn: "root" });
VhEscposService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
VhEscposService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmgtZXNjcG9zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy92aC1lc2Nwb3Mvc3JjL2xpYi92aC1lc2Nwb3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFLakQsTUFBTSxPQUFPLGVBQWU7SUFFMUIsZ0JBQWdCLENBQUM7SUFHakI7O09BRUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksR0FBRyxDQUFDLFVBQWtCLE1BQU07UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksSUFBSSxDQUFDLFlBQW9CLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsVUFBVSxDQUFDLFFBQWlCLElBQUk7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsT0FBTyxDQUFDLFFBQWlCLElBQUk7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsWUFBWSxDQUFDLFFBQWlCLElBQUk7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZ0JBQWdCLENBQUMsUUFBZ0IsTUFBTTtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILE9BQU8sQ0FBQyxRQUFnQixRQUFRO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILFNBQVMsQ0FBQyxPQUFlLEVBQUU7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLElBQVM7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0gsV0FBVyxDQUFDLE9BQWUsRUFBRTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTLEVBQUUsVUFBZSxFQUFFO1FBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFZO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUtEOztPQUVHO0lBQ0gsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7O1lBeEhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVzY0J1aWxkZXIgfSBmcm9tICcuL2VuY29kZS9Fc2NCdWlsZGVyJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL2VuY29kZS9JbWFnZSdcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFZoRXNjcG9zU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgcHVibGljIGJ1aWxkZXI6IEVzY0J1aWxkZXI7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgcHJpbnQgcXVldWVcbiAgICovXG4gIGluaXQoKTogVmhFc2Nwb3NTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXNjQnVpbGRlcigpO1xuICAgIHRoaXMuYnVpbGRlci5pbml0KCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGN1dFR5cGUgZnVsbHxwYXJ0aWFsXG4gICAqL1xuICBwdWJsaWMgY3V0KGN1dFR5cGU6IHN0cmluZyA9ICdmdWxsJyk6IFZoRXNjcG9zU2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLmN1dChjdXRUeXBlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gbGluZUNvdW50IEhvdyBtYW55IGxpbmVzIHRvIGZlZWRcbiAgICovXG4gIHB1YmxpYyBmZWVkKGxpbmVDb3VudDogbnVtYmVyID0gMSk6IFZoRXNjcG9zU2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLmZlZWQobGluZUNvdW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEludmVyc2UodmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogVmhFc2Nwb3NTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuc2V0SW52ZXJzZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRCb2xkKHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IFZoRXNjcG9zU2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLnNldEJvbGQodmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VW5kZXJsaW5lKHZhbHVlOiBib29sZWFuID0gdHJ1ZSk6IFZoRXNjcG9zU2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLnNldFVuZGVybGluZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIGxlZnR8Y2VudGVyXFxyaWdodFxuICAgKi9cbiAgc2V0SnVzdGlmaWNhdGlvbih2YWx1ZTogc3RyaW5nID0gJ2xlZnQnKTogVmhFc2Nwb3NTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIuc2V0SnVzdGlmaWNhdGlvbih2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHZhbHVlIG5vcm1hbHxsYXJnZVxuICAgKi9cbiAgc2V0U2l6ZSh2YWx1ZTogc3RyaW5nID0gJ25vcm1hbCcpOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5zZXRTaXplKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdGV4dFxuICAgKi9cbiAgd3JpdGVMaW5lKHRleHQ6IHN0cmluZyA9ICcnKTogVmhFc2Nwb3NTZXJ2aWNlIHtcbiAgICB0aGlzLmJ1aWxkZXIud3JpdGVMaW5lKHRleHQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqXG4gICAqL1xuICBkcmF3TGluZSgpOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5kcmF3TGluZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZGF0YVxuICAgKi9cbiAgd3JpdGVUYWJsZShkYXRhOiBhbnkpOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci53cml0ZVRhYmxlKGRhdGEpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc2l6ZVxuICAgKi9cbiAgc2V0UGFnZVNpemUoc2l6ZTogbnVtYmVyID0gNDgpOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5zZXRQYWdlU2l6ZShzaXplKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHdyaXRlQ3VzdG9tVGFibGUoZGF0YTogYW55LCBvcHRpb25zOiBhbnkgPSB7fSk6IFZoRXNjcG9zU2VydmljZSB7XG4gICAgdGhpcy5idWlsZGVyLndyaXRlQ3VzdG9tVGFibGUoZGF0YSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbWFnZShpbWFnZTogSW1hZ2UpOiBWaEVzY3Bvc1NlcnZpY2Uge1xuICAgIHRoaXMuYnVpbGRlci5yYXN0ZXIoaW1hZ2UpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cblxuXG5cbiAgLyoqXG4gICAqIHdyaXRlIHRoZSBjdXJyZW50IGJ1aWxkZXIgdmFsdWUgdG8gdGhlIGRyaXZlciBhbmQgY2xlYXIgb3V0IHRoZSBidWlsZGVyXG4gICAqL1xuICBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZGVyLmZsdXNoKCk7XG4gIH1cbn1cbiJdfQ==