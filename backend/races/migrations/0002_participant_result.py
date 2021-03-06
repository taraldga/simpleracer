# Generated by Django 4.0.1 on 2022-01-18 13:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('races', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Participant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=256)),
                ('email', models.CharField(max_length=256)),
                ('start_nr', models.IntegerField()),
                ('race', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='races.race')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('start', models.DateTimeField(blank=True, null=True)),
                ('finish', models.DateTimeField(blank=True, null=True)),
                ('participant', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='races.participant')),
                ('race', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='races.race')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
