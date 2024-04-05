var Notify = function () {
    "use strict";
    var t = function (t) {
            t.wrapper.classList.add("notify--fade"), setTimeout((function () {
                t.wrapper.classList.add("notify--fadeIn")
            }), 100)
        },
        e = function (t) {
            t.wrapper.classList.remove("notify--fadeIn"), setTimeout((function () {
                t.wrapper.remove()
            }), t.speed)
        },
        s = function (t) {
            t.wrapper.classList.add("notify--slide"), setTimeout((function () {
                t.wrapper.classList.add("notify--slideIn")
            }), 100)
        },
        i = function (t) {
            t.wrapper.classList.remove("notify--slideIn"), setTimeout((function () {
                t.wrapper.remove()
            }), t.speed)
        };
    return function () {
        function o(o) {
            var n = this;
            this.notifyOut = function (t) {
                t(n)
            }, this.fadeIn = t, this.fadeOut = e, this.slideIn = s, this.slideOut = i;
            var r = o.status,
                a = void 0 === r ? null : r,
                c = o.title,
                C = void 0 === c ? null : c,
                d = o.text,
                l = void 0 === d ? null : d,
                h = o.isIcon,
                p = void 0 === h || h,
                u = o.customIcon,
                f = void 0 === u ? null : u,
                v = o.customClass,
                y = void 0 === v ? null : v,
                m = o.speed,
                w = void 0 === m ? 500 : m,
                L = o.effect,
                g = void 0 === L ? "fade" : L,
                I = o.isCloseButton,
                x = void 0 === I || I,
                E = o.autoclose,
                O = void 0 !== E && E,
                M = o.autotimeout,
                Z = void 0 === M ? 3e3 : M,
                b = o.gap,
                B = void 0 === b ? 20 : b,
                N = o.distance,
                T = void 0 === N ? 20 : N,
                _ = o.type,
                k = void 0 === _ ? 1 : _,
                P = o.position,
                R = void 0 === P ? "right top" : P;
            this.status = a, this.title = C, this.text = l, this.isIcon = p, this.customIcon = f, this.customClass = y, this.speed = w, this.effect = g, this.isCloseButton = x, this.autoclose = O, this.autotimeout = Z, this.gap = B, this.distance = T, this.type = k, this.position = R, this.checkRequirements() ? (this.setContainer(), this.setWrapper(), this.setPosition(), this.isIcon && this.setIcon(), this.isCloseButton && this.setCloseButton(), this.setContent(), this.container.prepend(this.wrapper), this.setEffect(), this.notifyIn(this.selectedNotifyInEffect), this.autoclose && this.autoClose(), this.setObserver()) : console.error("You must specify 'title' or 'text' at least.")
        }
        return o.prototype.checkRequirements = function () {
            return !(!this.title && !this.text)
        }, o.prototype.setContainer = function () {
            var t = document.querySelector(".notifications-container");
            t ? this.container = t : (this.container = document.createElement("div"), this.container.classList.add("notifications-container"), document.body.appendChild(this.container)), this.container.style.setProperty("--distance", this.distance + "px")
        }, o.prototype.setPosition = function () {
            var t = "notify-is-";
            this.position.includes("left") ? this.container.classList.add(t + "left") : this.container.classList.remove(t + "left"), this.position.includes("right") ? this.container.classList.add(t + "right") : this.container.classList.remove(t + "right"), this.position.includes("top") ? this.container.classList.add(t + "top") : this.container.classList.remove(t + "top"), this.position.includes("bottom") ? this.container.classList.add(t + "bottom") : this.container.classList.remove(t + "bottom")
        }, o.prototype.setCloseButton = function () {
            var t = this,
                e = document.createElement("div");
            e.classList.add("notify__close"), e.innerHTML = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.94 7.99988L13.14 3.80655C13.2655 3.68101 13.3361 3.51075 13.3361 3.33321C13.3361 3.15568 13.2655 2.98542 13.14 2.85988C13.0145 2.73434 12.8442 2.66382 12.6667 2.66382C12.4891 2.66382 12.3189 2.73434 12.1933 2.85988L8 7.05988L3.80667 2.85988C3.68113 2.73434 3.51087 2.66382 3.33333 2.66382C3.1558 2.66382 2.98554 2.73434 2.86 2.85988C2.73446 2.98542 2.66394 3.15568 2.66394 3.33321C2.66394 3.51075 2.73446 3.68101 2.86 3.80655L7.06 7.99988L2.86 12.1932C2.79751 12.2552 2.74792 12.3289 2.71407 12.4102C2.68023 12.4914 2.6628 12.5785 2.6628 12.6665C2.6628 12.7546 2.68023 12.8417 2.71407 12.9229C2.74792 13.0042 2.79751 13.0779 2.86 13.1399C2.92198 13.2024 2.99571 13.252 3.07695 13.2858C3.15819 13.3197 3.24533 13.3371 3.33333 13.3371C3.42134 13.3371 3.50848 13.3197 3.58972 13.2858C3.67096 13.252 3.74469 13.2024 3.80667 13.1399L8 8.93988L12.1933 13.1399C12.2553 13.2024 12.329 13.252 12.4103 13.2858C12.4915 13.3197 12.5787 13.3371 12.6667 13.3371C12.7547 13.3371 12.8418 13.3197 12.9231 13.2858C13.0043 13.252 13.078 13.2024 13.14 13.1399C13.2025 13.0779 13.2521 13.0042 13.2859 12.9229C13.3198 12.8417 13.3372 12.7546 13.3372 12.6665C13.3372 12.5785 13.3198 12.4914 13.2859 12.4102C13.2521 12.3289 13.2025 12.2552 13.14 12.1932L8.94 7.99988Z" fill="currentColor"/></svg>', this.wrapper.appendChild(e), e.addEventListener("click", (function () {
                t.close()
            }))
        }, o.prototype.setWrapper = function () {
            var t = document.createElement("div");
            this.wrapper = t, this.wrapper.style.setProperty("--gap", this.gap + "px"), this.wrapper.style.transitionDuration = this.speed + "ms", this.wrapper.classList.add("notify"), this.wrapper.classList.add("notify--type-" + this.type), this.wrapper.classList.add("notify--" + this.status), this.customClass && this.wrapper.classList.add(this.customClass)
        }, o.prototype.setContent = function () {
            var t = document.createElement("div");
            t.classList.add("notify-content");
            var e = document.createElement("div");
            e.classList.add("notify__title"), e.textContent = this.title, this.isCloseButton || (e.style.paddingRight = "0");
            var s = document.createElement("div");
            s.classList.add("notify__text"), s.textContent = this.text, this.title || (s.style.marginTop = "0"), this.wrapper.appendChild(t), t.appendChild(e), t.appendChild(s)
        }, o.prototype.setIcon = function () {
            var t = document.createElement("div");
            t.classList.add("notify__icon"), t.innerHTML = this.customIcon || function (t) {
                switch (t) {
                    case "success":
                        return '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M19.6267 11.7201L13.9067 17.4534L11.7067 15.2534C11.5871 15.1138 11.44 15.0005 11.2746 14.9204C11.1092 14.8404 10.929 14.7954 10.7454 14.7884C10.5618 14.7813 10.3787 14.8122 10.2076 14.8792C10.0365 14.9463 9.88107 15.0479 9.75113 15.1779C9.62119 15.3078 9.51951 15.4632 9.45248 15.6343C9.38545 15.8054 9.35451 15.9885 9.3616 16.1722C9.36869 16.3558 9.41366 16.536 9.4937 16.7014C9.57373 16.8668 9.68709 17.0139 9.82666 17.1334L12.96 20.2801C13.0846 20.4037 13.2323 20.5014 13.3948 20.5678C13.5572 20.6341 13.7312 20.6678 13.9067 20.6667C14.2564 20.6653 14.5916 20.5264 14.84 20.2801L21.5067 13.6134C21.6316 13.4895 21.7308 13.342 21.7985 13.1795C21.8662 13.017 21.9011 12.8428 21.9011 12.6667C21.9011 12.4907 21.8662 12.3165 21.7985 12.154C21.7308 11.9915 21.6316 11.844 21.5067 11.7201C21.2568 11.4717 20.9189 11.3324 20.5667 11.3324C20.2144 11.3324 19.8765 11.4717 19.6267 11.7201ZM16 2.66675C13.3629 2.66675 10.785 3.44873 8.59239 4.91382C6.39974 6.37891 4.69077 8.46129 3.6816 10.8976C2.67243 13.334 2.40839 16.0149 2.92286 18.6013C3.43733 21.1877 4.70721 23.5635 6.57191 25.4282C8.43661 27.2929 10.8124 28.5627 13.3988 29.0772C15.9852 29.5917 18.6661 29.3276 21.1024 28.3185C23.5388 27.3093 25.6212 25.6003 27.0863 23.4077C28.5513 21.215 29.3333 18.6372 29.3333 16.0001C29.3333 14.2491 28.9885 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.19 5.33388 22.7201 4.35175 21.1024 3.68169C19.4848 3.01162 17.751 2.66675 16 2.66675ZM16 26.6667C13.8903 26.6667 11.828 26.0412 10.0739 24.8691C8.31979 23.697 6.95262 22.0311 6.14528 20.082C5.33795 18.133 5.12671 15.9882 5.53829 13.9191C5.94986 11.85 6.96576 9.94937 8.45752 8.45761C9.94928 6.96585 11.8499 5.94995 13.919 5.53837C15.9882 5.1268 18.1329 5.33803 20.082 6.14537C22.031 6.9527 23.6969 8.31987 24.869 10.074C26.0411 11.8281 26.6667 13.8904 26.6667 16.0001C26.6667 18.8291 25.5429 21.5422 23.5425 23.5426C21.5421 25.5429 18.829 26.6667 16 26.6667Z"/></svg>';
                    case "warning":
                        return '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16 14.6667C15.6464 14.6667 15.3072 14.8072 15.0572 15.0573C14.8071 15.3073 14.6667 15.6465 14.6667 16.0001V21.3334C14.6667 21.687 14.8071 22.0262 15.0572 22.2762C15.3072 22.5263 15.6464 22.6667 16 22.6667C16.3536 22.6667 16.6928 22.5263 16.9428 22.2762C17.1929 22.0262 17.3333 21.687 17.3333 21.3334V16.0001C17.3333 15.6465 17.1929 15.3073 16.9428 15.0573C16.6928 14.8072 16.3536 14.6667 16 14.6667ZM16.5067 9.44008C16.182 9.30672 15.8179 9.30672 15.4933 9.44008C15.3297 9.50354 15.1801 9.59869 15.0533 9.72008C14.9356 9.84968 14.8409 9.9985 14.7733 10.1601C14.6987 10.3183 14.6622 10.4918 14.6667 10.6667C14.6656 10.8422 14.6993 11.0162 14.7656 11.1786C14.832 11.3411 14.9298 11.4888 15.0533 11.6134C15.1829 11.7312 15.3317 11.8259 15.4933 11.8934C15.6953 11.9764 15.9146 12.0085 16.1319 11.9869C16.3492 11.9653 16.5579 11.8906 16.7396 11.7695C16.9213 11.6484 17.0705 11.4845 17.174 11.2922C17.2775 11.0999 17.3322 10.8851 17.3333 10.6667C17.3284 10.3137 17.1903 9.97559 16.9467 9.72008C16.8199 9.59869 16.6703 9.50354 16.5067 9.44008ZM16 2.66675C13.3629 2.66675 10.785 3.44873 8.59239 4.91382C6.39974 6.37891 4.69077 8.46129 3.6816 10.8976C2.67243 13.334 2.40839 16.0149 2.92286 18.6013C3.43733 21.1877 4.70721 23.5635 6.57191 25.4282C8.43661 27.2929 10.8124 28.5627 13.3988 29.0772C15.9852 29.5917 18.6661 29.3276 21.1024 28.3185C23.5388 27.3093 25.6212 25.6003 27.0863 23.4077C28.5513 21.215 29.3333 18.6372 29.3333 16.0001C29.3333 14.2491 28.9885 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.19 5.33388 22.7201 4.35175 21.1024 3.68169C19.4848 3.01162 17.751 2.66675 16 2.66675ZM16 26.6667C13.8903 26.6667 11.828 26.0412 10.0739 24.8691C8.31979 23.697 6.95262 22.0311 6.14528 20.082C5.33795 18.133 5.12671 15.9882 5.53829 13.9191C5.94986 11.85 6.96576 9.94937 8.45752 8.45761C9.94928 6.96585 11.8499 5.94995 13.919 5.53837C15.9882 5.1268 18.1329 5.33803 20.082 6.14537C22.031 6.9527 23.6969 8.31987 24.869 10.074C26.0411 11.8281 26.6667 13.8904 26.6667 16.0001C26.6667 18.8291 25.5429 21.5422 23.5425 23.5426C21.5421 25.5429 18.829 26.6667 16 26.6667Z"/></svg>';
                    case "error":
                        return '<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16 2.66675C13.3629 2.66675 10.785 3.44873 8.59239 4.91382C6.39974 6.37891 4.69077 8.46129 3.6816 10.8976C2.67243 13.334 2.40839 16.0149 2.92286 18.6013C3.43733 21.1877 4.70721 23.5635 6.57191 25.4282C8.43661 27.2929 10.8124 28.5627 13.3988 29.0772C15.9852 29.5917 18.6661 29.3276 21.1024 28.3185C23.5388 27.3093 25.6212 25.6003 27.0863 23.4077C28.5513 21.215 29.3333 18.6372 29.3333 16.0001C29.3333 14.2491 28.9885 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.19 5.33388 22.7201 4.35175 21.1024 3.68169C19.4848 3.01162 17.751 2.66675 16 2.66675ZM16 26.6667C13.171 26.6667 10.4579 25.5429 8.45752 23.5426C6.45714 21.5422 5.33333 18.8291 5.33333 16.0001C5.33038 13.6312 6.12402 11.3301 7.58666 9.46675L22.5333 24.4134C20.6699 25.8761 18.3689 26.6697 16 26.6667ZM24.4133 22.5334L9.46666 7.58675C11.3301 6.1241 13.6311 5.33047 16 5.33341C18.829 5.33341 21.5421 6.45722 23.5425 8.45761C25.5429 10.458 26.6667 13.1711 26.6667 16.0001C26.6696 18.369 25.876 20.67 24.4133 22.5334Z"/></svg>'
                }
            }(this.status), (this.status || this.customIcon) && this.wrapper.appendChild(t)
        }, o.prototype.setObserver = function () {
            var t = this,
                e = new IntersectionObserver((function (e) {
                    e[0].intersectionRatio <= 0 && t.close()
                }), {
                    threshold: 0
                });
            setTimeout((function () {
                e.observe(t.wrapper)
            }), this.speed)
        }, o.prototype.notifyIn = function (t) {
            t(this)
        }, o.prototype.autoClose = function () {
            var t = this;
            setTimeout((function () {
                t.close()
            }), this.autotimeout + this.speed)
        }, o.prototype.close = function () {
            this.notifyOut(this.selectedNotifyOutEffect)
        }, o.prototype.setEffect = function () {
            switch (this.effect) {
                case "fade":
                    this.selectedNotifyInEffect = this.fadeIn, this.selectedNotifyOutEffect = this.fadeOut;
                    break;
                case "slide":
                    this.selectedNotifyInEffect = this.slideIn, this.selectedNotifyOutEffect = this.slideOut;
                    break;
                default:
                    this.selectedNotifyInEffect = this.fadeIn, this.selectedNotifyOutEffect = this.fadeOut
            }
        }, o
    }()
}();


// Main Script


function validateCurrentFieldset() {
    var isValid = true;

    // Check for required fields in the current fieldset
    current_fs.find(".required").each(function () {
        if ($(this).val() === "") {
            isValid = false;
            // You can customize this part to show error messages or highlight the fields
            // alert("Please fill in all required fields.");
            new Notify({
                status: "warning",
                title: "Please fill in all required fields.",
                text: "",
                autoclose: !0,
                autotimeout: 3e3,
                effect: "slide",
                speed: 300,
                position: "right bottom"
            })
            return false; // Exit the loop early if any field is empty
        }
    });

    return isValid;
}

function previewImage(e, t) {
    if (e.files && e.files[0]) {
        var a = new FileReader;
        a.onload = function (e) {
            t.src = e.target.result, t.style.display = "block"
        }, a.readAsDataURL(e.files[0])
    } else t.style.display = "none"
}

function setupImagePreview(e, t) {
    var a = document.getElementById(e),
        s = document.getElementById(t);
    a.addEventListener("change", function (e) {
        previewImage(e.target, s)
    })
}

setupImagePreview("idCard", "preview"), setupImagePreview("team-member-2-idCard", "team-member-2-id-preview"), setupImagePreview("payment-screenshot", "payment-screenshot-preview");

function setRequiredAttributes(e, t) {
    e && e.querySelectorAll("input, select").forEach(function (e) {
        t ? e.setAttribute("required", t.toString()) : e.removeAttribute("required")
    })
}
let loader = document.getElementById("register-loader");
let a = document.getElementById("payment-amount");

document.getElementById("team-member-size").addEventListener("change", e => {
    let t = document.getElementById("team-member-2-details");
    2 == e.target.value ? (t.style.display = "flex", setRequiredAttributes(t, !0), a.innerHTML = "₹198") : (t.style.display = "none", setRequiredAttributes(t, !1), a.innerHTML = "₹99")
})

async function sendFormDataToServer(e) {
    try {
        let t = await fetch("https://script.google.com/macros/s/AKfycbxjLIJzmKMJnGw8iA6kp7wJftmZrT12Gz5zSKo8z7B9D3o2p3fiRhCz6rx_PabrzY0m/exec", {
                method: "POST",
                body: JSON.stringify(e)
            }),
            a = await t.json();
            loader.style.display = "none", console.log("response", a);
        let s = a.result,
            i, l;
        return "success" === s ? (i = "Registration Successful", l = "Thank you for registering with us!") : "error" === s ? (i = "Registration Failed", l = "Oops! Something went wrong. Please try again.") : (i = "Unexpected Response", l = "An unexpected response was received. Please contact support."), new Notify({
            status: s,
            title: i,
            text: l,
            autoclose: !0,
            autotimeout: 3e3,
            effect: "slide",
            speed: 300,
            position: "right bottom"
        }), "success" === s
    } catch (r) {
        return loader.style.display = "none", console.error("Error:", r), new Notify({
            status: "error",
            title: "Registration Error",
            text: "Sorry, your registration could not be recorded. Please try again later.",
            autoclose: !0,
            autotimeout: 3e3,
            effect: "slide",
            speed: 300,
            position: "right bottom"
        }), !1
    }
}

document.getElementById("myForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    let t = document.getElementById("RegisterButton");
    t.disabled = !0, t.innerHTML = "proceeding...", loader.style.display = "block";

    let r = new FileReader,
        n, m, p, o, d = (e, t) => new Promise((a, s) => {
            t.onloadend = () => a(t), t.readAsDataURL(e)
        });

    await d(this.elements.idCard.files[0], r),
        this.elements.TeamMemberSize.value == 2 && this.elements.TeamMember2idCard.files && this.elements.TeamMember2idCard.files[0] && await d(this.elements.TeamMember2idCard.files[0], p = new FileReader), this.elements.paymentScreenshot.files[0] && await d(this.elements.paymentScreenshot.files[0], o = new FileReader);

    let u = {
        name: this.elements.name.value,
        email: this.elements.email.value,
        phone: this.elements.phone.value,
        college: this.elements.college.value,
        department: this.elements.department.value,
        year: this.elements.year.value,
        idCard: {
            base64: r.result.split("base64,")[1],
            type: this.elements.idCard.files[0].type,
            fileName: this.elements.idCard.files[0].name
        },
        teamSize: this.elements.TeamMemberSize.value ,
        teamDetails: {
            teamMembers: [{
                name: this.elements.TeamMember2Name.value,
                email: this.elements.TeamMember2Email.value,
                phone: this.elements.TeamMember2Phone.value,
                college: this.elements.TeamMember2College.value,
                department: this.elements.TeamMember2Department.value,
                year: this.elements.TeamMember2Year.value,
                idCard: p ? {
                    base64: p.result.split("base64,")[1],
                    type: this.elements.TeamMember2idCard.files[0].type,
                    fileName: this.elements.TeamMember2idCard.files[0].name
                } : null
            }, ]
        },
        payment: {
            transactionScreenshot: o ? {
                base64: o.result.split("base64,")[1],
                type: this.elements.paymentScreenshot.files[0].type,
                fileName: this.elements.paymentScreenshot.files[0].name
            } : null,
            transactionID: this.elements.transactionID.value,
            amount: a.innerHTML.replace("₹","")
        },
        abstract: this.elements.websiteAbstract.value,
        githubUrl: this.elements.githubCodeLink.value,
        videoUrl: this.elements.googleDriveLink.value
    };
    console.log(u);
    let c = await sendFormDataToServer(u);
    c ? (loader.style.display = "none", e.target.innerHTML = `<div class="container mt-5"><div class="alert alert-success text-center"><h4 class="alert-heading">Registration has been successfully recorded</h4><p>Thank you! Please check your mail for confirmation. Our team will review your information shortly.</p></div></div>`) : (t.disabled = !1, t.innerHTML = "Submit")
});
