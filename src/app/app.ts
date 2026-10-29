import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { EDUCATION, EXPERIENCE, PROFILE, PROJECTS, SKILL_GROUPS, STATS } from './profile';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
})
export class App {
  protected readonly profile = PROFILE;
  protected readonly stats = STATS;
  protected readonly skills = SKILL_GROUPS;
  protected readonly experience = EXPERIENCE;
  protected readonly projects = PROJECTS;
  protected readonly education = EDUCATION;
  protected readonly year = new Date().getFullYear();

  protected readonly menuOpen = signal(false);
  protected readonly sent = signal(false);
  protected readonly activeShot = signal<Record<string, number>>({});

  protected readonly contact = inject(NonNullableFormBuilder).group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]],
  });

  protected shot(project: string): number {
    return this.activeShot()[project] ?? 0;
  }

  protected showShot(project: string, index: number): void {
    this.activeShot.update((s) => ({ ...s, [project]: index }));
  }

  /** No backend needed: opens the visitor's mail app with the message pre-filled. */
  protected send(): void {
    if (this.contact.invalid) {
      this.contact.markAllAsTouched();
      return;
    }
    const { name, email, message } = this.contact.getRawValue();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${this.profile.email}?subject=${subject}&body=${body}`;
    this.sent.set(true);
  }
}
