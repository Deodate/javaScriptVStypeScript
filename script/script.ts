// script.ts
const form: HTMLFormElement | null = document.getElementById('loginForm') as HTMLFormElement;
const errorElement: HTMLElement | null = document.getElementById('error');

form?.addEventListener('submit', function(event: Event): void {
    event.preventDefault();
    const username: string = (document.getElementById('username') as HTMLInputElement).value;
    const password: string = (document.getElementById('password') as HTMLInputElement).value;

    if (!username || !password) {
        if (errorElement) {
            errorElement.style.display = 'block';
        }
    } else {
        if (errorElement) {
            errorElement.style.display = 'none';
        }
        alert(`Login successful for user: ${username}`);
    }
});
