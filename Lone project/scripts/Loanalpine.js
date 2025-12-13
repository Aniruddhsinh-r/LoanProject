document.addEventListener('alpine:init', () => {
    Alpine.data('Loanweb', () => ({
        amount: '50000',
        intrestRate: '12',
        month: '12',
        year: new Date().getFullYear(),

        get monthlyRate() {
            return this.intrestRate / 12 / 100;
        },

        get emi() {
            const P = this.amount;
            const R = this.monthlyRate;
            const N = this.month;
            const emi = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
            return emi.toFixed(0);
        },

        get totalPayable() {
            return (this.emi * this.month).toFixed(0);
        },

        get interestAmount() {
            return (this.totalPayable - this.amount).toFixed(0);
        }
    }))

    Alpine.data('kycForm', () => ({
        Fname: '',
        mobile: '',
        pan:'',
        condition1: false,
        condition2: false,
        error: {},
        success: false,

        FormValidation() {
            this.error = {}
            if(this.Fname.length < 6) {
                this.error.Fname = "pls enter at least 6 character name";
            }
            if (this.mobile.length < 10) {
                this.error.mobile = "Too short: Minimum of '10' characters";
            }
            if (this.pan.length < 10) {
                this.error.pan = "Too short: Minimum of '10' characters";
            }
            if (this.condition1 === false) {
                this.error.condition1 = "This is required";
            }
            if (this.condition2 === false) {
                this.error.condition2 = "This is required";
            }
        },
        submitForm($event) {
            this.FormValidation()
            console.log(this.error);
            
            if (Object.keys(this.error).length !== 0) {
                return;
            }
      
            $event.target.reset()
            this.success = true;
            alert("Current status of this site is closed. Thank you for visiting and support");
        }
    })) 
})